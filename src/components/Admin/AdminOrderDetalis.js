import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CartItem from '../cart/CartItem'

const AdminOrderDetalis = () => {
    return (
        <div>
        <div className='admin-content-text'>Order Number#55</div>
        <CartItem />
        <CartItem />
        <CartItem />

        <Row className="justify-content-center mt-4 user-data">
            <Col xs="12" className=" d-flex">
                <div className="admin-content-text py-2">Customer details</div>
            </Col>
            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}>
                    Name:
                </div>

                <div
                    style={{
                        color: "#979797",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}
                    className="mx-2">
                    Nour Thrwat
                </div>
            </Col>

            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}>
                    Phone Number:
                </div>

                <div
                    style={{
                        color: "#979797",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}
                    className="mx-2">
                    0021313432423
                </div>
            </Col>
            <Col xs="12" className="d-flex">
                <div
                    style={{
                        color: "#555550",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}>
                    Email:
                </div>

                <div
                    style={{
                        color: "#979797",
                        fontFamily: "Almarai",
                        fontSize: "16px",
                    }}
                    className="mx-2">
                    ahmed@gmail.com
                </div>
            </Col>
            <div className=" d-inline px-4 border text-center pt-2">
                Total $18000
            </div>
            <div className="d-flex mt-2 justify-content-center">
                <select
                    name="languages"
                    id="lang"
                    className="select input-form-area mt-1  text-center px-2 w-50">
                    <option value="val">Order Status</option>
                    <option value="val2">Underway</option>
                    <option value="val2">Been completed</option>
                    <option value="val2">cancellation</option>
                </select>
                <button className="btn-a px-3 d-inline mx-2 ">Save</button>
            </div>
        </Row>
    </div>
)
}

export default AdminOrderDetalis