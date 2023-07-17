import React from 'react'
import './auth.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <Container style={{ minHeight: "80vh" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
            <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">New Account</label>
            <input
                placeholder="User Name"
                type="text"
                className="user-input mt-3 mx-auto"
            />
            <input
                placeholder="Your Email"
                type="text"
                className="user-input my-3 mx-auto"
            />
            <input
                placeholder="Password"
                type="password"
                className="user-input mx-auto"
            />
            <button className="btn-login mx-auto mt-4">Login</button>
            <label className="mx-auto my-4">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-link">
                Press here
                </span>
            </Link>
            </label>
        </Col>
        </Row>
    </Container>
)
}

export default Register