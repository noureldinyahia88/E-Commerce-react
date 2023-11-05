import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import './DiscountCard.css'
import laptops from '../../images/labtop.png'

const DiscountSection = () => {
    return (
        <Container>
            <Row className="discount mb-5 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                        Up To 25% OFF
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={laptops} alt="" />
                </Col>
            </Row>
        </Container>
    )
}

export default DiscountSection