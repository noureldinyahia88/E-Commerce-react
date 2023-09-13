import React from 'react'
import { Col, Row } from 'react-bootstrap'

import { ToastContainer } from 'react-toastify';

import SubCategoryHook from '../../hook/sub-category/SubCategoryHook'



const AdminAddSubCategory = () => {

    const [id,name ,loading ,category, subcategory, handelChange, handelSubmit, onChangeName] = SubCategoryHook()

    // get last category state from redux

    return (
        <div className="page-body">
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">Add new subcategory</div>
            <Col sm="8">
                <input
                    onChange={onChangeName}
                    value={name}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Subcategory name"
                />
                <select name="category" id="cat" className="select-input mt-3 px-2 " onChange={handelChange}>
                    <option className="option" value="0">Choose category</option>
                    {
                        category.data ? (category.data.map(item=>
                            {
                            return  (<option className="option" key={item._id} value={item._id}>{item.name}</option>)
                        })) : null
                    }
                    
                </select>
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 " onClick={handelSubmit}>Save changes</button>
            </Col>
        </Row>
        <ToastContainer />
    </div>
)
}

export default AdminAddSubCategory