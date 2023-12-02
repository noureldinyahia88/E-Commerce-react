import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { BsPencil, BsTrash3  } from "react-icons/bs";
import './rate.css'
import rate from '../../images/rate.png'
import DeleteRateHook from '../../hook/rate/DeleteRateHook';
import { ToastContainer } from 'react-toastify';
import EditRateHook from '../../hook/rate/EditRateHook';
import ReactStars from 'react-rating-stars-component'

const RateItem = ({review}) => {

    const [isUser, handelDelete, handleShow, handleClose, showDelete] = DeleteRateHook(review);
    const [handelEdit, handleShowEdit, handleCloseEdit, showEdit, onChangeRateText, onChangeRateValue, newRateText, newRateValue] = EditRateHook(review)
    
    const setting = {
        size: 20,
        count: 5,
        color: "#979797",
        activeColor: "#ffc107",
        value: newRateValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
            onChangeRateValue(newValue);
        }
    };

    return (
        <div>
            <Modal show={showDelete} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm deletion</Modal.Title>
            </Modal.Header>
            <Modal.Body>Delete Your Comment?</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={handelDelete}>
                Delete
            </Button>
            </Modal.Footer>
        </Modal>

        <Modal show={showEdit} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
            <Modal.Title>Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <ReactStars {...setting} />
                <input
                onChange={onChangeRateText}
                value={newRateText}
                type='text'
                className='font w-100'
                style={{border: 'none'}}
                />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseEdit}>
                Close
            </Button>
            <Button variant="success" onClick={handelEdit}>
                Edit
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
                <BsPencil  className="rate-icon" onClick={handleShowEdit} />
                <BsTrash3 className="rate-icon delete" onClick={handleShow} />
                </div>): null
            }
            
        </div>
        <ToastContainer />
    </div>
)
}

export default RateItem