import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'

import BrandCard from './BrandCard';



const BrandContainer = ({data, loading}) => {

    

    return (
        <Container >
        <div className="admin-content text-center mt-2 mb-5" style={{ minHeight: "100%" }}>All Brands</div>
        <Row className='row container d-flex justify-content-between align-items-center'>
        {
                    loading === false ? (
                        data ? (
                            data.map((item, index) => {
                                return <BrandCard  key={index} img={item.image}  />
                            })
                        ):<h2>No Category</h2>
                    ): <div className="is_loading d-flex"><Spinner animation="grow" /> <h2>Loading</h2></div>
                }
        </Row>
        </Container>
)
}

export default BrandContainer