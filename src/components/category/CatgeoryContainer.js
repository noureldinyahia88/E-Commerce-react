import React from 'react'
import { Container, Row, Spinner } from 'react-bootstrap'
import CategoryCard from './CategoryCard';
// import { useSelector } from 'react-redux';









const CategoryContainer = ({data, loading}) => {


    
    return (
    <Container >
        <div className="admin-content-text mt-2 ">All Category</div>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        data ? (
                            data.map((item, index) => {
                                return <CategoryCard title={item.title}  key={index} img={item.image} />
                            })
                        ):<h2>No Category</h2>
                    ): <div className="is_loading d-flex"><Spinner animation="grow" /> <h2>Loading</h2></div>
                }
            </Row>
        </Container>
)
}

export default CategoryContainer