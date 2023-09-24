import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, getProductLike } from '../../redux/actions/productsAction'
import { getOneCategory } from '../../redux/actions/categoryAction'
import mobile from '../../images/mobile.png'
import { getOneBrand } from '../../redux/actions/BrandAction'

const ViewProductDetailsHook = (id) => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getOneProduct(id))
        // dispatch(getOneCategory(item.category))
    },[])
    
    const oneProduct = useSelector((state)=> state.allProducts.oneProduct)

    const oneCategory = useSelector((state) => state.allCategory.oneCategory)

    const oneBrand = useSelector((state) => state.allBrand.oneBrand)

    const productLike = useSelector((state) => state.allProducts.productLike)
    // to get product details
    let item = [];
    if(oneProduct &&  oneProduct.data){
        
        item = oneProduct.data
    }
    else {
        item = []
    }

    // to get category name
    useEffect(()=>{
        if(item.category) {
            dispatch(getOneCategory(item.category))
        }
        if(item.brand) {
            dispatch(getOneBrand(item.brand))
        }
        if(item.category){
            dispatch(getProductLike(item.category))
        }
    }, [item])

    // to view image of the product
    let images = [];

    if(item.images){
        images = item.images.map((img)=>{return {original: img,}}) 
    }  else {
        images = [{original: `${mobile}`}]
    }


    
    // to view category of the product
    let cat = [];
    
    if(oneCategory &&  oneCategory.data){
        
        cat = oneCategory.data
    }
    else {
        cat = []
    }
    

    // to view the brand of product
    let brand = []

    if(oneBrand &&  oneBrand.data){
        
        brand = oneBrand.data
    }
    else {
        brand = []
    }
    
    // get the smiler product
    let prod = []

    if(productLike &&  productLike.data){
        
        prod = productLike.data
    }
    else {
        prod = []
    }
    
return [item, images, cat, brand, prod]
}

export default ViewProductDetailsHook