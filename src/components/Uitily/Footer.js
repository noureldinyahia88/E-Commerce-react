import React from 'react'
import { Container, Col ,Row} from "react-bootstrap";
import './Footer.css'
import facebook from "../../images/evaFacebookFill1.svg";
import instagram from "../../images/uil_instagram.svg";
import youtube from "../../images/mdi_youtube.svg";
import whiteLogo from '../../images/whiteLogo.svg'
const Footer = () => {
    return (
        <div className="footer mt-5 pt-2" >
            <Container className="">
                <Row className="d-flex justify-content-between align-items-center">
                    <Col sm="6" className="d-flex align-items-left  flex-column">
                        <img src={whiteLogo} className='logo' alt='logo' />
                        <div className="footer-shroot ">Terms and Conditions</div>
                        <div className="footer-shroot my-1">Privacy Policy</div>
                        <div className="footer-shroot my-1">Contact us</div>
                    </Col>
                    <Col sm="6" className="d-flex align-items-left  flex-column">
                    <div className="footer-head fw-bold">JOIN US ON</div>
                        <div className="social d-flex gap-2 my-2">
                        <img src={facebook} className='icon' alt='logo' />
                        <img src={instagram} className='icon' alt='logo' />
                        <img src={youtube} className='icon' alt='logo' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer