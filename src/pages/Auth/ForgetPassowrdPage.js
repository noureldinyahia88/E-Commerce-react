import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LoginHook from '../../hook/auth/LoginHook'
import Spinner from 'react-bootstrap/Spinner';
import { ToastContainer } from 'react-toastify';
import './auth.css'
import ForgetPasswordHook from '../../hook/auth/ForgetPasswordHook';
const ForgetPassWordPage = () => {
    const [email, onChangeEmail, onSubmit] = ForgetPasswordHook()
    return (
        <Container style={{ minHeight: "62vh" }} className="form-center">
        <Row className="row py-5 d-flex justify-content-center " >
            <Col sm="12" className="d-flex flex-column ">
                <h2 className='welcome-title'>Reset Your Password</h2>
                {/* <label className="mx-auto title-login">Reset Your Password</label> */}
                <input
                value={email}
                onChange={onChangeEmail}
                    placeholder="Enter Your Email"
                    type="text"
                    className="user-input my-3 mx-auto"
                />
                <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Reset</button>
                
            </Col>
            <ToastContainer />
        {/* {
        pressed ? (pressed === true ? (<Spinner className="spinner" animation="grow" />):null):null
        } */}
        </Row>
    </Container>
)
}

export default ForgetPassWordPage