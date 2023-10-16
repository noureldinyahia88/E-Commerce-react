import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction';
import { getAllBrand } from '../../redux/actions/BrandAction';
import ViewSearchHook from '../product/ViewSearchHook';

const SidebarSearchHook = () => {
    const [items, pagination, onPress, gerProduct, result] = ViewSearchHook()
    const dispatch = useDispatch();
    useEffect(()=>{
        const run = async () => {
        await  dispatch(getAllCategory());
        await  dispatch(getAllBrand());
        }
        run()
    }, []);

    // get category state from redux
    const allCategory = useSelector(state => state.allCategory.category)

    // get Brand state from redux
    const allBrand = useSelector(state => state.allBrand.brand)

    
    let category = [];
    if(allCategory && allCategory.data){
        category = allCategory.data
    }

    let brand = [];
    if(allBrand && allBrand.data){
        brand = allCategory.data
    }

    // to get checked category ID

    const [categoryChecked, setCategoryChecked] = useState([])

    const clickCategory = (e) => {
        let value = e.target.value

        if(value === "0") {
            
            setCategoryChecked([])
        } else {
            if(e.target.checked === true){
                setCategoryChecked([...categoryChecked, value])
            } else if(e.target.checked === false) {
                const newCategoryArr = categoryChecked.filter((ele)=> ele !== value)
                
                setCategoryChecked(newCategoryArr)
            }
        }
    }

    useEffect(() => {
        var queryCat = categoryChecked.map(val => "category[in][]=" + val).join("&")
        localStorage.setItem("categoryChecked", queryCat)
        setTimeout(() => {
            gerProduct();
        }, 1000)
    }, [categoryChecked])


        // to get checked Brand ID

        const [brandyChecked, setBrandChecked] = useState([])

        const clickBrand = (e) => {
            let value = e.target.value
    
            if(value === "0") {
                setBrandChecked([])
            } else {
                if(e.target.checked === true){
                    setBrandChecked([...brandyChecked, value])
                } else if(e.target.checked === false) {
                    const newBrandArr = brandyChecked.filter((ele)=> ele !== value)
                    setBrandChecked(newBrandArr)
                }
            }
        }

        useEffect(() => {
            var queryBrand = brandyChecked.map(val => "category[in][]=" + val).join("&")
            localStorage.setItem("brandChecked", queryBrand)
            setTimeout(() => {
                gerProduct();
            }, 1000)
        }, [brandyChecked])

        const [from, setPriceFrom]= useState(0)
        const priceFrom =(e) => {
            let value = e.target.value
            localStorage.setItem("priceFrom",value)
            setPriceFrom(value)
        }

        const [to, setPriceTo]= useState(0)
        const priceTo =(e) => {
            let value = e.target.value
            localStorage.setItem("priceTo",value)
            setPriceTo(value)
        }

        useEffect(()=>{
            setTimeout(()=>{
                gerProduct()
            }, 1000)
        }, [from, to])

    return [category, brand, clickCategory, clickBrand, priceFrom, priceTo] 
    }
export default SidebarSearchHook