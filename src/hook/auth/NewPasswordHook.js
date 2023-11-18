import { useEffect, useState } from 'react'
import notify from '../../hook/useToastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NewPasswordHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [password, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangePassword = (e) => {
        setNewPassword(e.target.value)
    }

    const onChangePasswordConfirm = (e) => {
        setConfirmPassword(e.target.value)
    }

    const onSubmit = async () => {
        if(password === ''){
            notify('Please Set A New Password', 'error')
            return
        }
        if(password !== confirmPassword){
            notify('Not Match', 'error')
            return
        }

        setLoading(true)
        await dispatch(setNewPassword({
            email:localStorage.getItem('email'),
            newPassword: password
        }))
        setLoading(false)
    }

    const res = useSelector(state => state.authReducer.verifyCode)

    useEffect(()=>{
        if(loading === false){
            if(res){
                console.log(res);
                if(res.data.status === "Success"){
                    notify("Success", "success")
                    setTimeout(() => {
                        navigate("/login")
                    }, 1500);
                }
                if(res.data.status === "fail"){
                    notify("There was an error. Try again later", "error")
                }
            }
        }
    }, [loading])

    return [password, onChangePassword, onChangePasswordConfirm, onSubmit]
}

export default NewPasswordHook