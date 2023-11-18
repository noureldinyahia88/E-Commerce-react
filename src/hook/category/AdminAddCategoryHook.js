import  { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createCategory} from '../../redux/actions/categoryAction'
import '../../pages/Auth/auth.css'
import avatar from '../../images/add.png'
import { useEffect } from 'react'
import notify from '../../hook/useToastify'


const AdminAddCategoryHook = () => {

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
    // on change name
    const onChangeName = (event) => {
        event.persist()
        setName(event.target.value)
    }
    // save data in database
    const handelSubmit = async (event) => {
        event.preventDefault();

        if(name === "" || selectedFile === null){
            notify("Please Enter The Data","warm")
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
                notify("Failed","error")
            } else {
                notify("Success","success")
            }

        }
    },[loading])

    return [img, name, loading, pressed, handelSubmit, onImageChange, onChangeName]
}

export default AdminAddCategoryHook