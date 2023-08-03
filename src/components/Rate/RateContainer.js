import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../Uitily/Pagination'

import rate from '../../images/rate.png'
import RateItem from './RateItem'
import RatePost from './RatePost'
import './rate.css'

const RateContainer = () => {
    return (
        <Container>

    <Container className='rate-container my-5'>
        <Row>
            <Col className='d-flex'>
            <div className="sub-tile d-inline p-1 ">User reviews</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.3</div>
                    <div className="rate-count d-inline p-1 pt-2">(Rate 154)</div>
            </Col>
        </Row>

            <RatePost />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />
            <RateItem />

    </Container>
            <Pagination />
        </Container>
)
}

export default RateContainer