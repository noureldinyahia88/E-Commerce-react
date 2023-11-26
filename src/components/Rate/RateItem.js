import React from 'react'
import { Col, Row } from 'react-bootstrap'

import rate from '../../images/rate.png'

const RateItem = ({review}) => {
    return (
        <div>
        <Row className="mt-3">
            <Col className="d-felx me-5">
                <div className="rate-name  d-inline ms-2 me-2">{review.user.name}</div>
                <img className="me-1" src={rate} alt="" height="16px" width="16px" />
                <div className="cat-rate  d-inline  p-1 pt-2">{review.rating}</div>
            </Col>
        </Row>
        <Row className="border-bottom mx-2">
            <Col className="d-flx me-4 pb-2">
                <div className="rate-description  d-inline ms-2">
                {review.review}
                </div>
            </Col>
        </Row>
    </div>
)
}

export default RateItem