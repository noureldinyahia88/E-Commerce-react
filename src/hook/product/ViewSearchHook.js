import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProduct } from '../../redux/actions/productsAction'

const ViewSearchHook = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllProduct())
    },[])
    
    const allProducts = useSelector((state)=> state.allProducts.allProducts)
    
    let items = [];
    if(allProducts &&  allProducts.data){
        console.log(allProducts.data);
        items = allProducts.data
    }
    else {
        items = []
    }

return [items]
}

export default ViewSearchHook