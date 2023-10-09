import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import star from '../../images/rate.png'
import './admin.css'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../redux/actions/productsAction'

const AdminAllProductsCard = ({item}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const handleDelete = async () => {
        setShow(true)
        await dispatch(deleteProduct(item._id))
        setShow(false)
        window.location.reload()
    }

    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex mb-3">

    <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you wish to permanently delete this product?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={handleDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>

        <Card
            className="my-2"
            style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#FFFFFF",
                padding:'10px',
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}>
            <Row className="d-flex justify-content-center px-2">
                <Col className=" d-flex justify-content-between">
                    <button onClick={handleShow} className="btn-card delete d-inline item-delete-edit">Delete</button>
                    <Link to={`/admin/editProduct/${item._id}`} style={{ textDecoration: "none" }}>
                    <button className="btn-card edit d-inline item-delete-edit">Edit</button>
                    </Link>
                </Col>
            </Row>
            <Link to={`/products/${item._id}`} style={{ textDecoration: "none" }}>
                <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
                <Card.Body>
                    <Card.Title>
                        <div className="title">
                            {item.title}
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <div className="currency mx-1">$</div>
                                <div className="price">{item.price}</div>
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