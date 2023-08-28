import React from 'react'
import { Row } from 'react-bootstrap'
import Pagination from '../Uitily/Pagination'
import ProductCard from '../ProductPage/ProductCard'

const UserFavoriteProduct = () => {
    return (
        <div>
        <div className="admin-content-text pb-4">Fav menu</div>
        <Row className='justify-content-start'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </Row>
        <Pagination />
    </div>
)
}

export default UserFavoriteProduct