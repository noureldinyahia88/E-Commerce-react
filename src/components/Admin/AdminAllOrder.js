import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllOrdersItem from './AdminAllOrdersItem'

const AdminAllOrder = () => {
    return (
    <div>
            <div className='admin-content-text'>Manage orders</div>
            <Row className='justify-content-start'>
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
                <AdminAllOrdersItem />
            </Row>
        </div>
)
}

export default AdminAllOrder