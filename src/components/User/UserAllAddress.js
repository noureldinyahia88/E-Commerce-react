import React from 'react'
import UserAddressCard from './UserAddressCard'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './user.css'

const UserAllAddress = () => {
    return (
        <div className="address-page">
        <div className="admin-content-text pb-4">The Addresses</div>
        <UserAddressCard />
        <UserAddressCard />
        <UserAddressCard />

        <Row className="justify-content-center">
            <Col sm="5" className="d-flex justify-content-center">
                <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                    <button className="btn-add-address">Add New The address</button>
                </Link>
            </Col>
        </Row>
    </div>
)
}

export default UserAllAddress