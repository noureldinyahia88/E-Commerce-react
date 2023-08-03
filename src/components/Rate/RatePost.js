import ReactStars from "react-rating-stars-component";
import React from 'react'
import { Col, Row } from "react-bootstrap";
import './rate.css'

const RatePost = () => {

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
        console.log(`Example 2: new value is ${newValue}`);
        }
    };

    return (
        <div>
        <Row className="mt-3 ">
          <Col sm="12" className="me-5  d-flex align-item-center">
            <div className="rate-name  d-inline ms-3 mt-1 me-2 ">Nour thrawt</div>
            <ReactStars {...setting} />
          </Col>
        </Row>
        <Row className="border-bottom mx-2">
          <Col className="d-felx me-4 pb-2">
            <textarea
              className="input-form-area text-area p-2 mt-3"
              rows="2"
              cols="20"
              placeholder="Add Comment...."
            />
            <div className=" d-flex justify-content-end al">
              <div className="product-cart-add  text-center d-inline">Add rate</div>
            </div>
          </Col>
        </Row>
      </div>
)
}

export default RatePost