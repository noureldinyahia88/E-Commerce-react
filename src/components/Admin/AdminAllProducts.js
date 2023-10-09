import React from 'react'
import AdminAllProductsCard from './AdminAllProductsCard'
import { Container, Row } from 'react-bootstrap'

const AdminAllProducts = ( { products} ) => {
    return (
        <Container>
        <div className='admin-content-text'>Manage all products</div>
        <Row className=''>
            {
                products ? (products.map((item, index)=>
                    <AdminAllProductsCard key={index} item={item} />
                )) : <h3>No Products</h3>
            }
        </Row>
        
    </Container>
)
}

export default AdminAllProducts