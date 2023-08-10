import React from 'react'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddProducts from '../../components/Admin/AdminAddProducts'
import { Col, Container, Row } from 'react-bootstrap'

const AdminAddProductsPage = () => {
    return (
        <Container >
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar />
            </Col>

            <Col sm="9" xs="10" md="10">
                 <AdminAddProducts />
            </Col>
        </Row>
    </Container>
)
}

export default AdminAddProductsPage