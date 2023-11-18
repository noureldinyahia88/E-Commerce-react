import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
import VerifyCodeHook from '../../hook/auth/VerifyCodeHook';
import './auth.css'

const VerifyCode = () => {
  const [code, onChangeCode, onSubmit] = VerifyCodeHook()
    return (
        <Container style={{ minHeight: "62vh" }} className="form-center">
        <Row className="row py-5 d-flex justify-content-center " >
            <Col sm="12" className="d-flex flex-column ">
                <h2 className='welcome-title'>Enter The Code</h2>
                <input
                value={code}
                onChange={onChangeCode}
                    placeholder="6 digits"
                    type="text"
                    className="user-input my-3 mx-auto"
                />
                <button className="btn-login mx-auto mt-4" onClick={onSubmit}>Confirm</button>
                
            </Col>
            <ToastContainer />
        </Row>
    </Container>
)
}

export default VerifyCode