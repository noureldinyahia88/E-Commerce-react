import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard';


import laptop from "../../images/labtop.png";
import Pagination from '../Uitily/Pagination';


const CategoryContainer = () => {
    
    return (
    <Container >
        <div className="admin-content-text mt-2 ">All Category</div>
            <Row className='my-2 d-flex justify-content-between'>
                <CategoryCard title="Home" img={laptop}  />
                <CategoryCard title="Home" img={laptop}  />
                <CategoryCard title="Home" img={laptop}  />
                <CategoryCard title="Home" img={laptop}  />
                <CategoryCard title="Home" img={laptop} />
                <CategoryCard title="Home" img={laptop} />
                <CategoryCard title="Home" img={laptop} />
                <CategoryCard title="Home" img={laptop} />
                <CategoryCard title="Home" img={laptop}  />
                <CategoryCard title="Home" img={laptop} />
                <CategoryCard title="Home" img={laptop} />
                <CategoryCard title="Home" img={laptop} />
            </Row>
        </Container>
)
}

export default CategoryContainer