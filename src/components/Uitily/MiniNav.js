import React from 'react'
import {  Container } from 'react-bootstrap'
import { FaQuestion, FaLocationDot } from "react-icons/fa6";
import './navbar.css'
// import { Link } from 'react-router-dom';

const MiniNav = () => {
    return (
            <div className="wrapper">
            <Container>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <p className="phoneNumber">+ 01 023 345 6788</p>
                    <p className="openingTime">Mon. - Fri. 9:00 - 20:00</p>
                </div>
                <div className="d-flex align-items-center">
                    {/* <Link to="/" > */}
                    <p className="phoneNumber"><FaQuestion /> FAQ</p>
                    {/* </Link> */}
                    <p className="openingTime"><FaLocationDot /> Order tracking</p>
                </div>
            </div>
            </Container>
        </div>
)
}

export default MiniNav