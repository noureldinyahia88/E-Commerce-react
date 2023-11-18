import React from 'react'
import './auth.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginHook from '../../hook/auth/LoginHook'
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer } from 'react-toastify';
import NewPasswordHook from '../../hook/auth/NewPasswordHook'

const NewPasswordPage = () => {
    const [password, onChangePassword, onChangePasswordConfirm, onSubmit] = NewPasswordHook()

    return (
        <Container style={{ minHeight: "71vh" }}>
        <Row className="row py-5 d-flex justify-content-center ">
            <Col sm="12" className="d-flex flex-column ">
                <label className="mx-auto title-login">Set a new password</label>
                <input
                    placeholder="New Password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    className="user-input mx-auto"
                />

                <input
                    placeholder="Confirm Password"
                    type="password"
                    value={password}
                    onChange={onChangePasswordConfirm}
                    className="user-input mx-auto"
                />
                <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Confirm</button>
                
            </Col>
            <ToastContainer />
        </Row>
    </Container>
)
}

export default NewPasswordPage