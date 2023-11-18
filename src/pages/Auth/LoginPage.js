import React from 'react'
import './auth.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/LoginHook'
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer } from 'react-toastify';

const LoginPage = () => {
    
    const [email, password, loading, onChangeEmail, onChangePassword, onSubmit, pressed] = LoginHook()

    return (
        <Container style={{ minHeight: "71vh" }}>
        <Row className="row py-5 d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
                <h2 className='welcome-title'>Welcome back!</h2>
                <label className="mx-auto title-login">Sign in to your account</label>
                <input
                value={email}
                onChange={onChangeEmail}
                    placeholder="Email"
                    type="text"
                    className="user-input my-3 mx-auto"
                />
                <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    className="user-input mx-auto"
                />
                <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Login</button>
                <label className="mx-auto my-4">
                Don't have an account? {" "}
                    <Link to="/register" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-link">
                        Sign Up
                        </span>
                    </Link>
                </label>

                <label className="mx-auto my-4">
                
                    <Link to="/user/forget-password" style={{textDecoration:'none'}}>
                        <span style={{ cursor: "pointer" }} className="text-link">
                        Forget Your Password?
                        </span>
                    </Link>
                </label>
            </Col>
            <ToastContainer />
        {
        pressed ? (pressed === true ? (<Spinner className="spinner" animation="grow" />):null):null
        }
        </Row>
    </Container>
)
}

export default LoginPage