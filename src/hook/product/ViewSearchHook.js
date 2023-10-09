import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, getAllProductPage } from '../../redux/actions/productsAction'

const ViewSearchHook = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllProduct(10))
    },[])
    
    // get the pagination page
    const onPress = async (page) => {
        await dispatch(getAllProductPage(page, 10))
    }

    const allProducts = useSelector((state)=> state.allProducts.allProducts)
    
    let items = [];
    if(allProducts &&  allProducts.data){
        items = allProducts.data
    }
    else {
        items = []
    }

    let pagination = [];
    if(allProducts &&  allProducts.paginationResult){
        pagination = allProducts.paginationResult.numberOfPages
    }
    else {
        pagination = []
    }

return [items, pagination, onPress]
}

export default ViewSearchHook