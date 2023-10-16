import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllProductSearch } from '../../redux/actions/productsAction'

const ViewSearchHook = () => {

    let limit = 10
    const dispatch = useDispatch()

    // get from localStorage
    let word = '' 
    var queryCat 
    var queryBrand
    let priceFrom = "", priceTo = "";
    let priceFromString = ""
    let priceToString = ""
    const getStorage = () => {
        if(localStorage.getItem("searchWord") != null){
            word = localStorage.getItem("searchWord")
        }
        if(localStorage.getItem("categoryChecked") != null){
            queryCat = localStorage.getItem("categoryChecked")
        }
        if(localStorage.getItem("brandChecked") != null){
            queryBrand = localStorage.getItem("brandChecked")
        }
        if(localStorage.getItem("priceFrom") != null){
            priceFrom = localStorage.getItem("priceFrom")
        }
        if(localStorage.getItem("priceTo") != null){
            priceTo = localStorage.getItem("priceTo")
        }
    }

    const gerProduct = async () => {
        getStorage()
        sortData()
        
        if(priceFrom === "" || priceFrom <= 0){
            priceFromString = ""
        } else {
            priceFromString = `&price[gt]=${priceFrom}`
        }

        
        if(priceTo === "" || priceTo <= 0){
            priceToString = ""
        } else {
            priceToString = `&price[lte]=${priceTo}`
        }
        await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`))
    }
    useEffect(()=>{
        gerProduct()
    },[])
    
    // get the pagination page
    const onPress = async (page) => {
        getStorage()
        sortData()
        await dispatch(getAllProductSearch(`sort=${sort}&limit=${limit}&page=${page}&keyword=${word}&${queryCat}&${queryBrand}${priceFromString}${priceToString}`))
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