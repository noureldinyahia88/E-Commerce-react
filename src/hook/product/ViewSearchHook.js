import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProductSearch } from '../../redux/actions/productsAction'

const ViewSearchHook = () => {

    let limit = 10
    const dispatch = useDispatch()
    const gerProduct = async () => {
        let word = ''
        if(localStorage.getItem("searchWord") != null){
            word = localStorage.getItem("searchWord")
        }
        sortData()
        await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&keyword=${word}`))
    }
    useEffect(()=>{
        gerProduct()
    },[])
    
    // get the pagination page
    const onPress = async (page) => {
        let word = ''
        if(localStorage.getItem("searchWord") != null){
            word = localStorage.getItem("searchWord")
        }
        sortData()
        await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}`))
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

    let sortType = ""
    let sort;
    const sortData = () => {
        if(localStorage.getItem("filterType") !== null){
            sortType = localStorage.getItem("filterType")
        } else {
            sortType = ""
        } 

        if(sortType === "+x"){
            sort = "+price"
        } else if(sortType === "-x"){
            sort = "-price"
        }
        else if(sortType === "most sold"){
            sort = "-sold"
        }
        else if(sortType === "most rating"){
            sort = "-quantity"
        }
    }

return [items, pagination, onPress, gerProduct, result]
}

export default ViewSearchHook