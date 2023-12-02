import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { BsPencil, BsTrash3  } from "react-icons/bs";
import './rate.css'
import rate from '../../images/rate.png'
import DeleteRateHook from '../../hook/rate/DeleteRateHook';
import { ToastContainer } from 'react-toastify';

const RateItem = ({review}) => {

    const [isUser, handelDelete, handleShow, handleClose, showDelete] = DeleteRateHook(review);
    

    return (
        <div>
            <Modal show={showDelete} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>Delete Your Comment</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={handelDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>

        <Row className="mt-3">
            <Col className="d-felx me-5">
                <div className="rate-name  d-inline ms-2 me-2">{review.user.name}</div>
                <img className="me-1" src={rate} alt="" height="16px" width="16px" />
                <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
            </Col>
        </Row>
        <div className="review-item  mx-2">
            <div className="d-flx me-4 pb-2">
                <div className="rate-description  d-inline ms-2">
                {review.review}
                </div>
            </div>
            {
                isUser === true ? (<div className="icons-wrapper">
                <BsPencil  className="rate-icon" />
                <BsTrash3 className="rate-icon delete" onClick={handleShow} />
                </div>): null
            }
            
        </div>
        <ToastContainer />
    </div>
)
}

export default RateItem