import React from 'react'
import './auth.css'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../hook/auth/RegisterHook'
import { ToastContainer } from 'react-toastify';

const Register = () => {
    const [name,email,phone,password,confirmPassword,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onConfirmPassword,onSubmit] = RegisterHook()
    return (
        <Container className="container-style">
        <Row className="sign-body py-5 d-flex ">
            <Col sm="12" className="d-flex flex-column ">
            <h2 className="mx-auto title-Account mb-4">New Account</h2>
            <input
                placeholder="User Name"
                type="text"
                className="user-input my-2 mx-auto"
                value={name}
                onChange={onChangeName}
            />
            <input
                placeholder="Your Email"
                type="email"
                className="user-input my-2 mx-auto"
                value={email}
                onChange={onChangeEmail}
            />
            <input
                placeholder="Your Phone Number"
                type="phone"
                className="user-input my-2 mx-auto"
                value={phone}
                onChange={onChangePhone}
            />
            <input
                placeholder="Password"
                type="password"
                className="user-input my-2 mx-auto"
                value={password}
                onChange={onChangePassword}
            />
            <input
                placeholder="Confirm Password"
                type="password"
                className="user-input my-2 mx-auto"
                value={confirmPassword}
                onChange={onConfirmPassword}
            />
            <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Sign up</button>
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
        <ToastContainer />
    </Container>
)
}

export default Register