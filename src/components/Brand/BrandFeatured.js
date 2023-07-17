import React from 'react'
import BrandCard from './BrandCard'
import SubTitle from '../Uitily/SubTitle'

import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'



const BrandFeatured = ({ title, btntitle}) => {
    return (
    <div className='container'>
    <SubTitle  title={title} btnTitle={btntitle} />
    <div className='row container d-flex justify-content-between align-items-center'>
        <BrandCard img={brand1} />
        <BrandCard img={brand2} />
        <BrandCard img={brand3} />
        <BrandCard img={brand1} />
    </div>
    </div>
)
}

export default BrandFeatured