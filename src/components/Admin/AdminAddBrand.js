import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './admin.css'
import '../../pages/Auth/auth.css'
import avatar from '../../images/add.png'

const AdminAddBrand = () => {
    return (
        <div className="page-body">
        <Container>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">Add new brand</div>
            <Col sm="8">
                <div className="text-form pb-2">Brand image</div>
                <img src={avatar} alt="" height="100px" width="120px" />
                <input
                    type="text"
                    className="user-input d-block mt-3 px-3"
                    placeholder="Brand Name"
                    />
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 ">Save changes</button>
            </Col>
        </Row>
    </Container>
    </div>
)
}

export default AdminAddBrand