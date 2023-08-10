import React from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { Col, Row } from 'react-bootstrap';
import avatar from '../../images/add.png'
import add from '../../images/addPlus.png'
import './admin.css'



const AdminAddProducts = () => {

    

    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "The first category", id: 1 },
        { name: "The second category", id: 2 },
    ];

    

    return (
        <div>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">Add a new product</div>
            <Col sm="8">
                <div className="text-form pb-2">Product images</div>
                <img src={avatar} alt="" height="100px" width="120px" />
                <input
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Product name"
                />
                <textarea
                    className="input-form-desc2 p-2 mt-3"
                    rows="4"
                    cols="50"
                    placeholder="Product description"
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Price before sale"
                />
                <input
                    type="number"
                    className="input-form d-block mt-3 px-3"
                    placeholder="Product price"
                />
                <select
                    name="languages"
                    id="lang"
                    className="select input-form-area mt-3 px-2 ">
                    <option value="val">The Main category</option>
                    <option value="val">The first category</option>
                    <option value="val2">The second category</option>
                    <option value="val2">the third category</option>
                    <option value="val2">the fourth category</option>
                </select>

                <Multiselect
                    className="mt-2"
                    placeholder="subcategory"
                    options={options}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    displayValue="name"
                    style={{ color: "red" }}
                    
                />
                <select
                    name="brand"
                    id="brand"
                    className="select input-form-area mt-3 px-2 ">
                    <option value="val">The brand</option>
                    <option value="val2">The first category brand</option>
                    <option value="val2">The second category brand</option>
                    <option value="val2">the third category brand</option>
                </select>
                <div className="text-form mt-3 ">The colors</div>
                <div className="mt-1 d-flex">
                    <div
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: "#E52C2C" }}></div>
                    <div
                        className="color ms-2 border mt-1 "
                        style={{ backgroundColor: "white" }}></div>
                    <div
                        className="color ms-2 border  mt-1"
                        style={{ backgroundColor: "black" }}></div>
                    <img src={add} alt="" width="30px" height="35px" className="" />
                </div>
            </Col>
        </Row>
        <Row>
            <Col sm="8" className="d-flex justify-content-end ">
                <button className="btn-save d-inline mt-2 ">Save changes</button>
            </Col>
        </Row>
    </div>
)
}

export default AdminAddProducts