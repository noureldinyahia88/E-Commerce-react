import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import './admin.css'
import '../../pages/Auth/auth.css'
import { ToastContainer } from 'react-toastify';
import AdminAddCategoryHook from '../../hook/category/AdminAddCategoryHook';

// import axios from 'axios'


const AdminAddCategory = () => {

    const [img, name, loading, pressed, handelSubmit, onImageChange, onChangeName] = AdminAddCategoryHook()


    return (
        <div className="page-body">
        <Container>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">Add new Category</div>
                <Col sm="8">
                <div className="text-form pb-2">Category image</div>
                <div>
                    <label for="upload-photo">
                        <img src={img} alt="fzx" height="100px" width="120px" style={{cursor:"pointer"}} />
                    </label>
                    <input type="file" name="photo" onChange={onImageChange} id="upload-photo" style={{opacity:"0"}} />
                </div>
                <input
                    value={name}
                    type="text"
                    className="user-input d-block mt-3 px-3"
                    placeholder="Category Name"
                    onChange={onChangeName}
                    /> 
            </Col>
            
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>Save changes</button>
            </Col>
        </Row>
        {
            pressed ? loading ? <Spinner animation="grow" />:<h4>Done</h4>:null
        }
        <ToastContainer />
    </Container>
    </div>
)
}

export default AdminAddCategory