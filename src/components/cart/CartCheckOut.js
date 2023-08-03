import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './cart.css'

const CartCheckOut = () => {
    return (
        <Row className="checkOut-box my-1 d-flex justify-content-center cart-checkout pt-3">
        <Col xs="12" className="d-flex  flex-column  ">
            <div className="d-flex  ">
                <input
                    className="promo-input d-inline text-center "
                    placeholder="Promo code"
                />
                <button className="promo-btn d-inline ">Apply</button>
            </div>
            <div className="product-price d-inline w-100 my-3  border">24000 EGP</div>
            <Link
                to="/order/paymethoud"
                style={{ textDecoration: "none" }}
                className="d-inline ">
                <button className="product-cart w-100 px-2">CONFIRM ORDER</button>
            </Link>
        </Col>
    </Row>
)
}

export default CartCheckOut