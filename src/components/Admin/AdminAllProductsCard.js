import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import star from '../../images/rate.png'
import './admin.css'

const AdminAllProductsCard = () => {
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">
        <Card
            className="my-2"
            style={{
                width: "100%",
                height: "350px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#FFFFFF",
                padding:'10px',
            }}>
            <Row className="d-flex justify-content-center px-2">
                <Col className=" d-flex justify-content-between">
                    <div className="delete d-inline item-delete-edit">Delete</div>
                    <div className="edit d-inline item-delete-edit">Edit</div>
                </Col>
            </Row>
            <Link to="/products/:id" style={{ textDecoration: "none" }}>
                <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                <Card.Body>
                    <Card.Title>
                        <div className="title">
                            Esse nostrud amet commodo
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="currency mx-1">$</div>
                                <div className="price">880</div>
                            </div>
                            <div className="card-rate d-flex align-items-center gap-1">4.5 <img className="star" src={star} alt='rate'/></div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    </Col>
)
}

export default AdminAllProductsCard