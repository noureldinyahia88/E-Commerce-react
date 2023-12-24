import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWishListAction } from '../../redux/actions/addWishListAction'

const CardProductContainerHook = () => {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [favProd, setFavProd] = useState([])


    const res = useSelector(res => res.addToWishlistReducer.getWishlist)

    useEffect(()=>{
    const get = async () =>{
    setLoading(true)
    await  dispatch(getAllWishListAction())
    setLoading(false)
    } 
    get()
}, [])

    useEffect(()=>{
    if(loading === false){
        if(res.data){
        console.log(res.data.map(item => item._id));
        setFavProd(res.data.map(item => item._id))
    }
    }
}, [])
    
    return [favProd]
}

export default CardProductContainerHook