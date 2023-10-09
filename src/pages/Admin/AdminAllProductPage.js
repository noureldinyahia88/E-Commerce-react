import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import Pagination from '../../components/Uitily/Pagination'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'
import ViewProductPageAdminHook from '../../hook/admin/ViewProductPageAdminHook'


const AdminAllProductPage = () => {

    const [items, pagination, onPress] = ViewProductPageAdminHook()

    if(pagination){
        var pageCount = pagination
    } else {
        pageCount = 0
    }

    return (
        <Container >
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                <AdminSideBar />
            </Col>

            <Col sm="9" xs="10" md="10">
                <AdminAllProducts products={items} />
                {
                    pageCount > 1 ? (<Pagination pageCount={pageCount} onPress={onPress} />):null
                }
                
            </Col>
        </Row>
    </Container>
)
}

export default AdminAllProductPage