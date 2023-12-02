import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Pagination from '../Uitily/Pagination'

import rate from '../../images/rate.png'
import RateItem from './RateItem'
import RatePost from './RatePost'
import './rate.css'
import ViewAllReviewHook from '../../hook/rate/ViewAllReviewHook'
import { useParams } from 'react-router-dom'

const RateContainer = ({ratingsQuantity,rateAvg}) => {
    const { id } = useParams()
    const [allReview, onPress] = ViewAllReviewHook(id)

    return (
    <Container className='rate-container my-5'>
        <Row>
            <Col className='d-flex'>
            <div className="sub-tile d-inline p-1 ">Users review</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">{rateAvg}</div>
                    <div className="rate-count d-inline p-1 pt-2">({ratingsQuantity})</div>
            </Col>
        </Row>
            <RatePost />
            {allReview.data ? (allReview.data.map((review, index)=>{return (<RateItem key={index} review={review} />)})): <h6>No Reviews Added</h6>}
            {
                allReview.paginationResult && allReview.paginationResult.numberOfPages >= 2 ? (<Pagination pageCount={allReview.paginationResult ? allReview.paginationResult.numberOfPages : 0} onPress={onPress} />) : null
            }
            
    </Container>
)
}

export default RateContainer