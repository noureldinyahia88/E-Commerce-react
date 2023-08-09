import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './admin.css'

import mobile from '../../images/mobile.png'
import star from '../../images/rate.png'

const AdminAllOrdersItem = () => {
    return (
        <Col sm="12" className="">
        <Link
            to="/admin/orders/23"
            className="cart-body my-2 p-3 d-flex"
            style={{ textDecoration: "none" }}>
            <img width="160px" height="197px" src={mobile} alt="" />
            <div className="w-100 ">
                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row justify-content-between">
                        <div className="d-inline edit pt-2 cat-text">Order Number #2321</div>
                        <div className="d-inline delete pt-2 cat-text">Delete</div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-2">
                    <Col sm="12" className=" d-flex flex-row justify-content-start gap-3">
                        <div className="d-inline title pt-2">
                            Iphone xMax 256GB
                        </div>
                        <div className="d-inline pt-2 rate me-2 d-flex">4.5</div>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" className=" d-flex align-items-center">
                        <div className="mt-2  cat-text d-inline">Brand:</div>
                        <div className="mt-2 cat-text d-inline mx-1">Apple</div>
                    </Col>
                </Row>

                <Row className="justify-content-between">
                    <Col sm="12" className=" d-flex flex-row  align-items-center">
                        <div className="d-inline pt-2 d-flex">
                            <div className="cat-text pt-1 d-inline">Quantity:</div>
                            <input
                                className="mx-2 mt-1"
                                type="number"
                                style={{ width: "40px", height: "25px"}}
                            />
                        </div>
                        <div className="d-inline pt-2 price">$18000</div>
                    </Col>
                </Row>
            </div>
        </Link>
    </Col>
)
}

export default AdminAllOrdersItem