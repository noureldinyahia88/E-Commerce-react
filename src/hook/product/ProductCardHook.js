import { useEffect, useState } from 'react';
import favoff from "../../images/heart_black.png";
import fav from "../../images/heart_red.png";

import { useDispatch, useSelector } from 'react-redux';
import { addToWishListAction, removeFromWishListAction } from '../../redux/actions/addWishListAction';
import notify from '../../hook/useToastify'


const ProductCardHook = (item, favProd) => {

    const dispatch = useDispatch()

  const [favImage, setFavImage] = useState(favoff)
  const [loadingAdd, setLoadingAdd] = useState(true)

  let Fav = favProd.some(fitem => fitem === item._id);
  const [isFavProd, setIsFavProd] = useState(Fav)
  
  useEffect(() => {
    setIsFavProd(favProd.some(fitem => fitem === item._id))
  }, [favProd])

  const handleFavBtn = () => {
    if(isFavProd){
      removeFromWishlistData()
    } else{
      addWishlistData()
    }
    
  }

  useEffect(() => {
    if(isFavProd === true) {
      setFavImage(fav)
    } else {
      setFavImage(favoff)
    }
  }, [isFavProd])

  const resAdd = useSelector(state => state.addToWishlistReducer.addWishlist)
  const resRemoved = useSelector(state => state.addToWishlistReducer.removeFromWishlist)

  const addWishlistData = async (e) => {
    setIsFavProd(true)
    setFavImage(fav)
    setLoadingAdd(true)

    await dispatch(addToWishListAction({
      productId: item._id,
  }))
  setLoadingAdd(false)
  }

  const removeFromWishlistData = async (e) => {
    await dispatch(removeFromWishListAction(item._id))
  if(resRemoved && resRemoved.status === 400){
    notify("The prodect removed to the wishlist", "succses")
  } else if(resAdd &&  resAdd.status === 401){
    notify("You're Not Logged In","error")
  }
  setIsFavProd(false)
  setFavImage(favoff)
  }

  useEffect(() => {
    if(loadingAdd === false) {
      console.log(resAdd);
      if(resAdd && resAdd.data.message === "Product added successfully to your wishlist"){
        notify("The prodect added to the wishlist", "succses")
      } else if(resAdd &&  resAdd.status === 401){
        notify("You're Not Logged In","error")
      }
    }
  }, [loadingAdd])

    return [addWishlistData, removeFromWishlistData,handleFavBtn, favImage, Fav]
}

export default ProductCardHook