import ReactStars from "react-rating-stars-component";
import React from 'react'
import { Col, Row } from "react-bootstrap";
import './rate.css'
import AddRateHook from "../../hook/rate/AddRateHook";
import { ToastContainer } from "react-toastify";

const RatePost = () => {
  const [rateText, rateValue, onChangeRateText, onChangedRateValue, user, onSubmit] = AddRateHook()

  var name = "unKnown"
  if(user){
    name = user.name
  }
    const setting = {
        size: 20,
        count: 5,
        color: "#F0F0F0",
        activeColor: "#FBBC04",
        value: 7.5,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: newValue => {
          onChangedRateValue(newValue);
        }
    };

    return (
        <div>
        <Row className="mt-3 ">
          <Col sm="12" className="me-5  d-flex align-item-center">
            <div className="rate-name  d-inline ms-3 mt-1 me-2 ">{name.charAt(0).toUpperCase() + name.slice(1)}</div>
            <ReactStars {...setting} />
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            <textarea
            onChange = {onChangeRateText}
            value = {rateText}
              className="input-form-area text-area p-2 mt-3"
              rows="2"
              cols="20"
              placeholder="Add Comment...."
            />
            <div className=" d-flex justify-content-end al">
              <button onClick={onSubmit} className="product-cart-add  text-center d-inline">Add rate</button>
            </div>
          </Col>
        </Row>
        <ToastContainer />
      </div>
)
}

export default RatePost