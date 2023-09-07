import React from 'react'
import BrandCard from './BrandCard'
import SubTitle from '../Uitily/SubTitle'
import './brandFeatured.css'


import { Container, Row, Spinner } from 'react-bootstrap'
import HomeCategoryHook from '../../hook/brand/HomeBrandHook'




const BrandFeatured = ({ title, btntitle, data}) => {

    const [brand, loading] = HomeCategoryHook()

    return (
    <Container className="brand-bg">
    <SubTitle  title={title} btnTitle={btntitle} pathText='/allbrand' />

    <Row className='row container d-flex justify-content-between align-items-center'>
        {
                    loading === false ? (
                        brand.data ? (
                            brand.data.slice(0, 5).map((item, index) => {
                                return <BrandCard key={index} img={item.image}  />
                            })
                        ):<h2>No Category</h2>
                    ): <div className="is_loading d-flex"><Spinner animation="grow" /> <h2>Loading</h2></div>
                }
    </Row>
    </Container>
)
}

export default BrandFeatured