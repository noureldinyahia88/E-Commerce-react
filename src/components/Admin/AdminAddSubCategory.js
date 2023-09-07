import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../redux/actions/categoryAction'
import { ToastContainer } from 'react-toastify';
import notify from '../../hook/useToastify'

const AdminAddSubCategory = () => {

    const [id, setID] = useState("0")
    const [name, setName] = useState("")

    const handelChange = (e) => {
        console.log(e.target.value);

        setID(e.target.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault();

        if(id === "0") {
            notify("Please choose valid category" ,"warm")
            return;
        }
        if(name === "") {
            notify("Please write valid name" ,"warm")
            return;
        }
    }

    const dispatch = useDispatch();

    useEffect(()=>{
    dispatch(getAllCategory());
    }, []);

    // get last category state from redux
    const category = useSelector(state => state.allCategory.category)

    return (
        <div className="page-body">
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">Add new subcategory</div>
            <Col sm="8">
                <input
                    onChange={(e)=> setName(e.target.value)}
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