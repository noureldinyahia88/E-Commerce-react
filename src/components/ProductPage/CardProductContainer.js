import React, { useEffect, useState } from 'react';
import SubTitle from '../Uitily/SubTitle';
import ProductCard from './ProductCard';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWishListAction } from '../../redux/actions/addWishListAction';

const CardProductContainer = ({ title,btntitle,pathText, products}) => {

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
  return (
    <Container>
      {products ? (<SubTitle  title={title} btnTitle={btntitle}  pathText={pathText}/>): null}
      <Row className='row container d-flex justify-content-between align-items-center'>
        {
          products ? (products.map((item, index)=><ProductCard key={index} item={item} favProd={favProd}/>)):null
        }
        
      </Row>
    </Container>
  );
};

export default CardProductContainer;
