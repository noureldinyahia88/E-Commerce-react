import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProductPage, getAllProductSearch } from '../../redux/actions/productsAction'

const ViewSearchHook = () => {

    let limit = 15 
    const dispatch = useDispatch()
    const gerProduct = async () => {
        let word = ''
        if(localStorage.getItem("searchWord") != null){
            word = localStorage.getItem("searchWord")
        }
        await dispatch(getAllProductSearch(`limit=${limit}&keyword=${word}`))
    }
    useEffect(()=>{
        gerProduct()
    },[])
    
    // get the pagination page
    const onPress = async (page) => {
        await dispatch(getAllProductPage(page, limit))
    }

    const allProducts = useSelector((state)=> state.allProducts.allProducts)
    
    let items = [];
    try{
        if(allProducts &&  allProducts.data){
            items = allProducts.data
        }
        else {
            items = []
        }
    } catch(e){}

    let result = [];
    try{
        if(allProducts &&  allProducts.data){
            result = allProducts.results
        }
        else {
            result = []
        }
    } catch(e){}

    let pagination = [];
    try{
        if(allProducts &&  allProducts.paginationResult){
            pagination = allProducts.paginationResult.numberOfPages
        }
        else {
            pagination = []
        }
    } catch(e) {}

return [items, pagination, onPress, gerProduct, result]
}

export default ViewSearchHook