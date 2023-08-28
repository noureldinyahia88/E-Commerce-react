import React, { useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {createCategory} from '../../redux/actions/categoryAction'
import './admin.css'
import '../../pages/Auth/auth.css'
import avatar from '../../images/add.png'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'


const AdminAddCategory = () => {

    const dispatch = useDispatch()
    
    const [img, setImg] = useState(avatar)
    const [selectedFile, setSelectedImage] = useState(null)
    const [name, setName] = useState('')
    const [loading, setLoading] = useState(true)
    const [pressed, setPressed] = useState(false)

    const res = useSelector(state => state.allCategory.category)

    // when image change save it
    const onImageChange = (event) => {
        if(event.target.files && event.target.files[0]){
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedImage(event.target.files[0])
        }
    }
    // save data in database
    const handelSubmit = async (event) => {
        event.preventDefault();

        if(name === "" || selectedFile === null){
            notify("Please Enter","warm")
            return
        }

        const formData = new FormData();
        formData.append("name", name)
        formData.append("image", selectedFile)


        setLoading(true)
        setPressed(true)
        await dispatch(createCategory(formData))
        setLoading(false)
    }

    useEffect(() => {

        if(loading === false){
            console.log("done");
            setImg(avatar)
            setName('')
            setSelectedImage(null)
            setLoading(true)
            setTimeout(()=> setPressed(false), 1000)

            if(res.state === 201){
                notify("Success","success")
            } else {
                notify("Failed","error")
            }

        }
    },[loading])


    const notify = (msg, type) => {
        if(type === "warm")
            toast.warn(msg)
        else if(type === "success")
            toast.success(msg)
        else if( type === "error")
            toast.error(msg)
    };

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
                    onChange={(e)=> setName(e.target.value)}
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