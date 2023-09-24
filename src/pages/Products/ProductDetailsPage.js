import React from 'react'
import CategoryHeader from '../../components/Uitily/CategoryHeader'
import ProductDetails from '../../components/ProductPage/ProductDetails'
import RateContainer from '../../components/Rate/RateContainer'
import CardProductContainer from '../../components/ProductPage/CardProductContainer'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../hook/product/ViewProductDetailsHook'




const ProductDetailsPage = () => {

    const { id } = useParams()

    const [item, images, cat, brand, prod] = ViewProductDetailsHook(id);

    if(prod) {
        var items = prod.slice(0,4)
    }

    return (
    <div>
        <CategoryHeader />
        <ProductDetails />
        <RateContainer />
        <CardProductContainer products={items} title="You may like" />
    </div>
)
}

export default ProductDetailsPage