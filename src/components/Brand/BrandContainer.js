import React from 'react'
import { Container, Row } from 'react-bootstrap'

import BrandCard from './BrandCard';


import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'


const BrandContainer = () => {
    return (
        <Container >
        <div className="admin-content text-center mt-2 mb-5" style={{ minHeight: "100%" }}>All Brands</div>
        <div className='row container d-flex justify-content-between align-items-center'>
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
    </div>
        </Container>
)
}

export default BrandContainer