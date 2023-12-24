import React, { useEffect, useState } from 'react';
import SubTitle from '../Uitily/SubTitle';
import ProductCard from './ProductCard';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWishListAction } from '../../redux/actions/addWishListAction';
import CardProductContainerHook from '../../hook/product/CardProductContainerHook';

const CardProductContainer = ({ title,btntitle,pathText, products}) => {

  const [favProd] = CardProductContainerHook()
  
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
