import React from 'react'
import CategoryHeader from '../../components/Uitily/CategoryHeader'
import ProductDetails from '../../components/ProductPage/ProductDetails'
import RateContainer from '../../components/Rate/RateContainer'
import CardProductContainer from '../../components/ProductPage/CardProductContainer'

const ProductDetailsPage = () => {
    return (
    <div>
        <CategoryHeader />
        <ProductDetails />
        <RateContainer />
        <CardProductContainer title="You may like" />
    </div>
)
}

export default ProductDetailsPage