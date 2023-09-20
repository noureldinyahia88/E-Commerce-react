import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/BrandAction';
import { CompactPicker } from 'react-color';
import { getOneCategory } from '../../redux/actions/SubcategoryAction';
import { createProduct } from '../../redux/actions/productsAction';
import notify from '../../hook/useToastify'

const AddProductHook = () => {

    // value images products
    const [images, setImages] = useState([]);
    // values State
    const [prodName, setProdName] = useState('');
    const [prodDescription, setProdDescription] = useState('');
    const [priceBefore, setPriceBefore] = useState();
    const [priceAfter, setPriceAfter] = useState();
    const [qty, setQty] = useState();
    const [catID, setCatID] = useState('');
    const [brandID, setBrandId] = useState('');
    const [subCatID, setSubCatID] = useState([]);
    const [selectedSubID, setSelectedSubID] = useState([]);
    const [loading, setLoading] = useState(true)


    const onChangeNameProd = (event)=>{
        event.persist()
        setProdName(event.target.value)
    }

    const onChangeDecProd = (event)=>{
        event.persist()
        setProdDescription(event.target.value)
    }
    const onChangePriceBefore= (event)=>{
        event.persist()
        setPriceBefore(event.target.value)
    }

    const onChangePriceAfter = (event)=>{
        event.persist()
        setPriceAfter(event.target.value)
    }

    const onChangeQty = (event)=>{
        event.persist()
        setQty(event.target.value)
    }

    const onChangeColor= (event)=>{
        event.persist()
        setShowColor(!showColor)
    }
const dispatch = useDispatch();

useEffect(()=>{
    
    dispatch(getAllCategory());
    dispatch(getAllBrand());
    }, []);

    // to get category from redux
const category = useSelector(state => state.allCategory.category)
// to get brand from redux
const brand = useSelector(state => state.allBrand.brand)
// to get brand from redux
const subCat = useSelector(state => state.subCategory.subcategory)


const onSelect = selectedList => setSelectedSubID(selectedList);
const onRemove = selectedList => setSelectedSubID(selectedList);


const onSelectCategory = async (e) => {
    if (e.target.value !== 0) {

    await  dispatch(getOneCategory(e.target.value))
    }
    setCatID(e.target.value)
}

useEffect(()=> {
    if(catID !== 0 ){
        if(subCat.data) {
            setOptions(subCat.data)
        }
    }
}, [catID])


// when select brand store id
const onSelectBrand = (e) => {
    setBrandId(e.target.value)
}


const [options, setOptions] = useState([])


// hide and show compactPicker
const [showColor, setShowColor] = useState(false)

// store pick colors
const [colors, setPickColor] = useState([])

const handelChangeComplete = (color) => {
    setPickColor([...colors, color.hex])
    setShowColor(!showColor)
}
// remove color
const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color)
    setPickColor(newColor)
}

  //to convert base 64 to file
function dataURLtoFile(dataurl, filename) {
    
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
}

// to save data
const handelSubmit = async (e) => {
    e.preventDefault();

    /// validation
    if(prodName === "" || prodDescription === "" || priceBefore <= 0 || qty === 0 || catID === "" || images.length <= 0){
        notify("Please fill out the required inputs","warm")
    }

    // to check if the price before is greater than the price after
    if(priceBefore <= priceAfter){
        notify("the price before should be less than price after","warm")
    }

    //to convert base 64 to file
    const imgCover = dataURLtoFile(images[0], Math.random() + ".png")

    //to convert array of base 64 image to file
    const itemImages = Array.from(Array(Object.keys(images).length).keys()).map((item, index)=>{
        return dataURLtoFile(images[index], Math.random() + ".png")
    })


    const formData = new FormData();
    
    formData.append("title", prodName)
    formData.append("description", prodDescription)
    formData.append("quantity", qty)
    formData.append("price", priceBefore)
    formData.append("imageCover", imgCover)
    formData.append("category", catID)

    itemImages.map(item => formData.append("images", item))
    colors.map(item => formData.append("availableColors", item))
    selectedSubID.map(item => formData.append("subcategory", item._id))

    setLoading(true)
    await dispatch(createProduct(formData))
    setLoading(false)

}
// to create massage to insure that the product sent to database
const product = useSelector(state => state.allProducts.product)

useEffect(()=>{
    if(loading === false){
        setImages([])
        setProdName("")
        setProdDescription("")
        setPriceBefore(0)
        setPriceAfter(0)
        setQty(0)
        setCatID(0)
        setPickColor([])
        setSelectedSubID([])
        setTimeout(()=> setLoading(true), 1500)
        
        if(product){
            if(product.status === 200){
                notify("Success","success")
            } else {
                notify("There are some thing wrong","error")
            }
        }
    }
}, [loading])

    return [onChangeColor,onChangeQty,onChangePriceBefore,onChangePriceAfter, onChangeDecProd,onChangeNameProd, showColor, category, brand, priceAfter, images, setImages, onSelect, onRemove, options, handelChangeComplete, removeColor, onSelectCategory, handelSubmit, onSelectBrand, colors, priceBefore, qty,prodDescription, prodName]
}

export default AddProductHook