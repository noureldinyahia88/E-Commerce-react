import React from 'react'
import ProductGallery from './ProductGallery'
import { Col, Container, Row } from 'react-bootstrap'
import ProductText from './ProductText'

const ProductDetails = () => {
    return (
    <div className='page-body'>
        <Container>
            <Row className='pt-5'>
                <Col lg="4">
        <ProductGallery />
                </Col>
                <Col lg="8">
                    <ProductText />
                </Col>
            </Row>
        </Container>
    </div>
)
}

export default ProductDetails