import React from 'react';
import SubTitle from '../Uitily/SubTitle';
import ProductCard from './ProductCard';

const CardProductContainer = ({ title, btntitle}) => {
  return (
    <div className='container'>
      <SubTitle  title={title} btnTitle={btntitle} />
      <div className='row container d-flex justify-content-between align-items-center'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default CardProductContainer;
