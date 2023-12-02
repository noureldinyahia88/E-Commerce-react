import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import notify from '../../hook/useToastify'


const EditRateHook = (review) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isUser, setIsUser] = useState(true)
    const [loading, setLoading] = useState(true)
    const [newRateText, setNewRateText] = useState(review.review)
    const [newRateValue, setNewRateValue] = useState(review.rating)

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const onChangeRateText = (e) => {
        setNewRateText(e.target.value)
    }

    const onChangeRateValue = (e) => {
        setNewRateValue(e.target.value)
    }


    let user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (review.user._id === user._id) {
            console.log("yes");
            setIsUser(true);
        }
    }, [])


    const handelEdit = async () => {
        
    }


    useEffect(() => {
    
    }, [loading])

    return [handelEdit, handleShowEdit, handleCloseEdit, showEdit, onChangeRateText, onChangeRateValue, newRateText, newRateValue]

}

export default EditRateHook