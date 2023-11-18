import { useEffect, useState } from 'react'
import notify from '../../hook/useToastify'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../redux/actions/authAction'
import { useNavigate } from 'react-router-dom'

const ForgetPasswordHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onSubmit = async () => {
        if(email === ""){
            notify("Please Enter Your Email", "error")
        }

        // store the email in localStorage to use it in setNew Password hook
        localStorage.setItem('email',email)

        setLoading(true)
        await dispatch(forgetPassword({
            email,
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.forgetPassword)

    useEffect(()=>{
        if(loading === false){
            if(res){
                console.log(res);
                if(res.data.status === "Success"){
                    notify("Check Your Email", "success")
                    setTimeout(()=>{
                        navigate("/user/forget-password")
                    }, 1000)
                }
                if(res.data.status === "fail"){
                    notify("This user doesn't exists",'error')
                }
            }
        }
    }, [loading])

    return [email, onChangeEmail, onSubmit]
}

export default ForgetPasswordHook