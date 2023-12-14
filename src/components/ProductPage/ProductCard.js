import React, { useEffect, useState } from 'react';
import { Card, Col, ToastContainer } from 'react-bootstrap';
import favoff from "../../images/heart_black.png";
import fav from "../../images/heart_red.png";
import rate from "../../images/rate.png";
import { Link } from 'react-router-dom';
import './productsDetails.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishListAction, removeFromWishListAction } from '../../redux/actions/addWishListAction';
import notify from '../../hook/useToastify'



const ProductCard = ({item, favProd}) => {

  const dispatch = useDispatch()

  const [favImage, setFavImage] = useState(favoff)
  const [loadingAdd, setLoadingAdd] = useState(true)

  let Fav = favProd.some(fitem => fitem === item._id);
  const [isFavProd, setIsFavProd] = useState(Fav)
  

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
  if(resRemoved && resRemoved.status === 200){
    notify("The prodect removed to the wishlist", "succses")
  }
  setIsFavProd(false)
  setFavImage(favoff)
  }

  useEffect(() => {
    if(loadingAdd === false) {
      if(resAdd && resAdd.status === "succses"){
        notify("The prodect added to the wishlist", "succses")
      }
    }
  }, [loadingAdd])



  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-5"
        style={{
          width: "100%",
          height: "100%",
          minHeight:"380px",
          borderRadius: "8px",
          border: "none",
        }}
      >
        <Link to={`/products/${item._id}`} style={{ textDecoration: 'none' }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
        </Link>
        <div className="d-flex justify-content-end mx-2">
          <img
            src={favImage}
            alt=""
            className="text-center"
            style={{
              height: "24px",
              width: "26px",
              cursor: 'pointer'
            }}
            onClick={handleFavBtn}
          />
        </div>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              {item.title}
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between flex-column">
              <div className="d-flex">
                <div className="card-price">${item.price}</div>
              </div>
            </div>
              <div className="d-flex">
                <img
                  className=""
                  src={rate}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">{item.ratingsAverage || 0}</div>
              </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Col>
  );
};

export default ProductCard;
