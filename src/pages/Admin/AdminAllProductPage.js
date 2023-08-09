import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Pagination from '../../components/Uitily/Pagination'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'

const AdminAllProductPage = () => {
    return (
        <Container >
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar />
            </Col>

            <Col sm="9" xs="10" md="10">
                <AdminAllProducts />
            </Col>
                <Pagination />
        </Row>
    </Container>
)
}

export default AdminAllProductPage