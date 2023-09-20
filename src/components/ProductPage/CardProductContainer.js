import React from 'react';
import SubTitle from '../Uitily/SubTitle';
import ProductCard from './ProductCard';
import { Container, Row } from 'react-bootstrap';

const CardProductContainer = ({ title,btntitle,pathText, products}) => {
  return (
    <Container>
      {products ? (<SubTitle  title={title} btnTitle={btntitle}  pathText={pathText}/>): null}
      <Row className='row container d-flex justify-content-between align-items-center'>
        {
          products ? (products.map((item, index)=><ProductCard key={index} item={item}/>)):null
        }
        
      </Row>
    </Container>
  );
};

export default CardProductContainer;
