import { useState } from 'react'
import notify from '../../hook/useToastify'

const RegisterHook = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

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

    const volition = () => {
        if(name === ""){
            notify("Enter Your Name Please", "error")
            return;
        }
        if(email === ""){
            notify("Enter Your Email Please", "error")
            return;
        } 
        if(phone.length <= 11){
            notify("Enter Valid Phone Number", "error")
            return;
        }
        if(password === ""){
            notify("Enter Your password", "error")
            return;
        } 
        if(password.length <= 8){
                notify("8 character/number at least", "error")
        }
        if(confirmPassword != password){
            notify("Not Match", "error")
            return;
        }
    }
    const onSubmit = () =>{
        volition()
    }

    return [name,email,phone,password,confirmPassword,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onConfirmPassword,onSubmit]
}

export default RegisterHook