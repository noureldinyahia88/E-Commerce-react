import React from 'react'
import { Col, Row } from 'react-bootstrap'

const CheckoutMethods = () => {
    return (
    <div style={{ minHeight: "680px" }}>
    <div className="admin-content-text pt-5">Choose Your Checkout Method</div>
    <div className="user-address-card my-3 px-3">
        <Row className="d-flex justify-content-between align-item-center">
            <Col xs="12" className="my-4 d-flex align-items-center gap-2">
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="Visa"
                    className="mt-2"
                />
                <label className="mt-2" for="group1">
                    Visa   
                </label>
            </Col>
        </Row>

        <Row className="mt-3">
            <Col xs="12" className="d-flex align-items-center gap-2">
                <input
                    name="group"
                    id="group1"
                    type="radio"
                    value="Paiement when receiving"
                    className="mt-2"
                />
                <label className="mt-2" for="group1">
                Paiement when receiving 
                </label>
            </Col>
        </Row>
    </div>

    <Row>
        <Col xs="12" className="d-flex justify-content-end">
            <div className="product-price d-inline  border">26000 EGP</div>
            <div className="product-cart-add px-3 pt-2 d-inline me-2">Confirm</div>
        </Col>
    </Row>
</div>
)
}

export default CheckoutMethods