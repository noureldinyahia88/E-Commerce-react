import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllWishListAction } from '../../redux/actions/addWishListAction'
import CardProductContainer from '../ProductPage/CardProductContainer'

const UserFavoriteProduct = () => {

    const [loading, setLoading] = useState(true)
    const [items , setItems] = useState([])
    const dispatch = useDispatch()

    useEffect(()=> {
        const get = async () => {
            setLoading(true)
            await dispatch(getAllWishListAction)
            setLoading(false)
        }
        get()
    }, [])

    const res = useSelector(state => state.addToWishlistReducer.getWishlist)

    useEffect(()=>{
        if(loading === false){
            if(res){
                setItems(res.data)
            }
        }
    }, [loading])

    return (
        <div>
        <div className="admin-content-text pb-4">Fav menu</div>
        <Row className='justify-content-start'>
            {
            items ? <h3>No Favorite Products</h3> :<CardProductContainer products={items}  />
            }
            
        </Row>
    </div>
)
}

export default UserFavoriteProduct