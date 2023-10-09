import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct, getAllProductPage } from '../../redux/actions/productsAction'

const ViewProductPageAdminHook = () => {

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
    let pagination = []
    try {
        if(allProducts &&  allProducts.data){
            items = allProducts.data
        }
        else {
            items = []
        }
    
        pagination = [];
        if(allProducts &&  allProducts.paginationResult){
            pagination = allProducts.paginationResult.numberOfPages
        }
        else {
            pagination = []
        }
    } catch(e) {}
    

    return [items, pagination, onPress]
}

export default ViewProductPageAdminHook