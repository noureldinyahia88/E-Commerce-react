import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import './Footer.css'
import whiteLogo from '../../images/ss-logo-00.svg'
const Footer = () => {
    return (
        <div className="footer mt-5 pt-4 pb-4" >
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-left  flex-column ">
                        <img src={whiteLogo} className="logo mb-3" alt='logo' />
                        <div className="footer-shroot ">Terms and Conditions</div>
                        <div className="footer-shroot my-1">Privacy Policy</div>
                        <div className="footer-shroot my-1">Contact us</div>
                    </Col>
                    <Col sm="6" className="d-flex align-items-left  flex-column">
                    <div className="footer-head fw-bold mb-3">JOIN US ON</div>
                        <div className="social d-flex align-item-center gap-3 my-2">
                            <div className="icon-footer">
                        <FaFacebook />
                            </div>
                            <div className="icon-footer">
                        <FaInstagram />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer