import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import './Footer.css'
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import phone from "../../images/phone.png";
const Footer = () => {
    return (
        <div className="footer mt-5 pt-2" >
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-center ">
                        <div className="footer-shroot ">Terms and Conditions</div>
                        <div className="footer-shroot mx-2">Privacy Policy</div>
                        <div className="footer-shroot mx-2">Contact us</div>
                    </Col>
                    <Col
                        sm="6"
                        className="d-flex justify-content-between align-items-center ">
                        <div className="d-flex pt-3 mx-2 gap-2">
                            <img width="20px" height="20px" src={phone} alt="" />
                            <p className="footer-phone">0122455346356</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center ">
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={facebook} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={instagram} alt="" />
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer