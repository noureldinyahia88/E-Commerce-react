import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './productsDetails.css'
import { useParams } from 'react-router-dom'
import ViewProductDetailsHook from '../../hook/product/ViewProductDetailsHook'

const ProductText = () => {

    const { id } = useParams()
    
    const  [item, images, cat, brand] = ViewProductDetailsHook(id)
    

    return (
            <div>
            <Row className="mt-2">
            <div className="cat-text">Category : {cat.name}</div>
            </Row>
            <Row>
            <Col md="8">
                <div className="cat-title d-inline">
                {item.title}
                <div className="cat-rate d-inline mx-3">4.5</div>
                </div>
            </Col>
            </Row>
            <Row>
            <Col md="8" className="mt-4">
                {
                    brand.name ? (<div>
                        <div className="cat-text d-inline">Model :</div>
                        <div className="barnd-text d-inline mx-1">{brand.name}</div>
                    </div>) : null
                }
                
            </Col>
            </Row>
            <Row>
            <Col md="8" className="mt-1 d-flex">
                {
                    item.availableColors ? (item.availableColors.map((color, index)=>{
                        return <div key={index}
                        className="color ms-2 border" style={{ backgroundColor: color }}>
                        </div>
                    })) : null
                }
            </Col>
            </Row>
    
            <Row className="mt-4">
            <div className="cat-text">Product details:</div>
            </Row>
            <Row className="mt-2">
            <Col md="10">
                <div className="product-description d-inline">
                {item.description}
                </div>
            </Col>
            </Row>
            <Row className="mt-4">
            <Col md="12">
                <div className="product-price d-inline px-3 py-3 border">$ {item.price}</div>
                <div className="product-cart-add px-3 py-3 d-inline mx-3">Add To Cart</div>
            </Col>
            </Row>
        </div>
)
}

export default ProductText