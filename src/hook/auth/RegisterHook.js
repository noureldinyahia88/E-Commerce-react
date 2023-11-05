import { useEffect, useState } from 'react'
import notify from '../../hook/useToastify'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser } from '../../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'

const RegisterHook = () => {

    const navigate = useNavigate()

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(true)

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeEmail= (e) => {
        setEmail(e.target.value)
    }

    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const res = useSelector(state => state.authReducer.createUser)
    
    
    const volition = () => {
        if(name === ""){
            notify("Enter Your Name Please", "error")
            return;
        }
        if(email === ""){
            notify("Enter Your Email Please", "error")
            return;
        } 
        if(password === ""){
            notify("Enter Your password", "error")
            return;
        } 
        if(confirmPassword !== password){
            notify("Not Match", "error")
            return;
        }
    }

    const dispatch = useDispatch()

    const onSubmit = async () =>{
    volition()
    setLoading(true)
    await dispatch(createNewUser({
        name,
        email,
        password,
        passwordConfirm:confirmPassword,
        phone
    }))
    setLoading(false)
    }

    useEffect(()=>{
        if(loading === false){
            if(res){
                console.log(res);
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
                    notify("success","success")
                    setTimeout(()=>{
                        navigate("/login")
                    })
                }  
                if(res.data.errors){
                    if(res.data.errors[0].msg === "E-mail already in use"){
                        notify("This Email Already exist", "error")
                    }
                }
                if(res.data.errors){
                    if(res.data.errors[0].msg === "accept only egypt phone numbers"){
                        notify("accept only egypt phone numbers","error")
                    }
                }
                if(res.data.errors){
                    if(res.data.errors[0].msg === "must be at least 6 chars"){
                        notify("password must be at least 6 chars","error")
                    }
                }
            }
        }
    },[loading])

    return [name,email,phone,password,confirmPassword,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onConfirmPassword,onSubmit]
}

export default RegisterHook