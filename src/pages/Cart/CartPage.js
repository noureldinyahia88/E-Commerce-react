import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './cartPage.css'
import CartItem from '../../components/cart/CartItem'
import CartCheckOut from '../../components/cart/CartCheckOut'



const CartPage = () => {
    return (
        <Container>
            <Row>
                <div className="cart-h1 mt-4">Cart</div>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col xs="12" md="9">
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                    <CartItem/>
                </Col>

            <Col xs="6" md="3">
                    <CartCheckOut />
                </Col>
            </Row>
        </Container>
)
}

export default CartPage