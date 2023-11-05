import { useEffect, useState } from 'react'
import notify from '../../hook/useToastify'
import { useDispatch, useSelector } from 'react-redux'
import { createNewUser, loginUser } from '../../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'

const LoginHook = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading, setLoading] = useState(true)
    const [pressed, setPressed] = useState(false)

    const onChangeEmail= (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = async () => {
        setLoading(true)
        setPressed(true)
        await dispatch(loginUser({
            email,
            password
        }))
        setLoading(false)
        setPressed(false)
    }
    const res = useSelector(state => state.authReducer.loginUser)

    useEffect(()=>{
        if (loading === false) {
            if (res) {
                console.log(res.data);
                if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    localStorage.setItem("user", JSON.stringify(res.data.data))
                    notify("success Login","success")
                    setTimeout(()=>{
                        window.location.href = "/"
                    }, 1500)
                } else {
                    localStorage.removeItem("token");
                    localStorage.removeItem("user");
                }

                if(res.data.message === "Incorrect email or password"){
                    localStorage.removeItem("token");
                    localStorage.removeItem("user")
                    notify("Incorrect email or password", "error")
                }
                setLoading(true)
            }
        }
        
    }, [loading])

    return [email, password, loading, onChangeEmail, onChangePassword, onSubmit, pressed]
}

export default LoginHook