import React from 'react'
import { Col, Row } from 'react-bootstrap'

import mobile from '../../images/mobile.png'
import deletion from '../../images/delete.png'

const CartItem = () => {
    return (
        <Col xs="12" className="cart-item my-2 d-flex px-2">
            <img width="160px" height="197px" src={mobile} alt="" />
            <div className="w-100">
            <Row className="justify-content-between">
                <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 cat-text">Electronics</div>
                <div className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                    <img src={deletion} alt="" width="20px" height="24px" />
                    <div className="cat-text d-inline me-2 ms-2">Delete</div>
                </div>
                </Col>
            </Row>
            <Row className="justify-content-center mt-2">
                <Col sm="12" className=" d-flex flex-row justify-content-start">
                <div className="d-inline pt-2 cat-title">
                Apple IPhone 11 With FaceTime - 128GB - White
                </div>
                <div className="d-inline pt-2 cat-rate me-2">4.5</div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" className="mt-1">
                <div className="cat-text d-inline">SELLER INFORMATION</div>
                <div className="barnd-text d-inline mx-1">Apple</div>
                </Col>
            </Row>
            <Row>
                <Col sm="12" className="mt-1 d-flex">
                <div
                    className="color ms-2 border"
                    style={{ backgroundColor: "#E52C2C" }}></div>
                </Col>
            </Row>
    
            <Row className="justify-content-between">
                <Col sm="12" className=" d-flex flex-row justify-content-between">
                <div className="d-inline pt-2 d-flex">
                    <div className="cat-text  d-inline">Quantity</div>
                    <input
                    className="mx-2 "
                    type="number"
                    style={{ width: "40px", height: "25px" }}
                    />
                </div>
                <div className="d-inline pt-2 barnd-text">26000 EGP </div>
                </Col>
            </Row>
            </div>
        </Col>
)
}

export default CartItem