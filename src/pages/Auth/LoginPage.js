import React from 'react'
import './auth.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const LoginPage = () => {
    return (
        <Container style={{ minHeight: "71vh" }}>
        <Row className="row py-5 d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
                <h2 className='welcome-title'>Welcome back!</h2>
                <label className="mx-auto title-login">Sign in to your account</label>
                <input
                    placeholder="Email"
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
                Don't have an account? {" "}
                    <Link to="/register" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-link">
                        Sign Up
                        </span>
                    </Link>
                </label>



            </Col>


            <label className="mx-auto my-4">
            <Link to="/admin/allproducts" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-link">
                    Admin Login
                </span>
            </Link>

            <Link to="/user/allorders" style={{textDecoration:'none'}}>
                <span style={{ cursor: "pointer" }} className="text-link mx-3">
                    User Login
                </span>
            </Link>
        </label>
        </Row>
    </Container>
)
}

export default LoginPage