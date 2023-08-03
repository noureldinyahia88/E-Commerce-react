import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './productsDetails.css'

const ProductText = () => {
    return (
            <div>
            <Row className="mt-2">
            <div className="cat-text">Electronics</div>
            </Row>
            <Row>
            <Col md="8">
                <div className="cat-title d-inline">
                Apple IPhone 13 Pro Max Single SIM With FaceTime - 128GB
                <div className="cat-rate d-inline mx-3">4.5</div>
                </div>
            </Col>
            </Row>
            <Row>
            <Col md="8" className="mt-4">
                <div className="cat-text d-inline">Model :</div>
                <div className="barnd-text d-inline mx-1">Apple </div>
            </Col>
            </Row>
            <Row>
            <Col md="8" className="mt-1 d-flex">
                <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C" }}></div>
                <div
                className="color ms-2 border "
                style={{ backgroundColor: "white" }}></div>
                <div
                className="color ms-2 border"
                style={{ backgroundColor: "black" }}></div>
            </Col>
            </Row>
    
            <Row className="mt-4">
            <div className="cat-text">Product details:</div>
            </Row>
            <Row className="mt-2">
            <Col md="10">
                <div className="product-description d-inline">
                Technology: GSM / CDMA / HSPA / EVDO / LTE / 5G
                2G bands: GSM 850 / 900 / 1800 / 1900
                CDMA 800 / 1900
                3G bands: HSDPA 850 / 900 / 1700(AWS) / 1900 / 2100
                CDMA2000 1xEV-DO
                4G bands: 1, 2, 3, 4, 5, 7, 8, 12, 13, 17, 18, 19, 20, 25, 26, 28, 30, 32, 34, 38, 39, 40, 41, 42, 46, 48, 66
                5G bands: 1, 2, 3, 5, 7, 8, 12, 20, 25, 28, 30, 38, 40, 41, 48, 66, 77, 78, 79 SA/NSA/Sub6
                Speed: HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps
                </div>
            </Col>
            </Row>
            <Row className="mt-4">
            <Col md="12">
                <div className="product-price d-inline px-3 py-3 border">EGP 52,900.00</div>
                <div className="product-cart-add px-3 py-3 d-inline mx-3">Add To Cart</div>
            </Col>
            </Row>
        </div>
)
}

export default ProductText