import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './DiscountCard.css'
import laptops from '../../images/labtop.png'
import productThatHasDiscount from '../../images/—Pngtree—3d beauty cosmetics product design_6391024.png'

const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount mb-5 d-flex text-center align-items-center">
                <Col sm="6" className="title-wrapper">
                    <div className="discount-title">
                        Up To 25% OFF
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={productThatHasDiscount} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection