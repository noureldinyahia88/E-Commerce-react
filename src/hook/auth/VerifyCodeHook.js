import { useEffect, useState } from 'react'
import notify from '../../hook/useToastify'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { verifyCode } from '../../redux/actions/authAction'

const VerifyCodeHook = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [code, setCode] = useState('')
    const [loading, setLoading] = useState(true)

    const onChangeCode = (e) => {
        setCode(e.target.value)
    }

    const onSubmit = async () => {
        setLoading(true)
        await dispatch(verifyCode({
            "resetCode":code
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
                    setTimeout(()=>{
                        navigate("/user/set-new-password")
                    }, 1000)
                }
                if(res.data.status === "fail"){
                    notify("Not correct", "error")
                }
                if(res.data.status === "error"){
                    notify("There was an error sending the email. Try again later", "error")
                }
            }
        }
    }, [loading])

    return [code, onChangeCode, onSubmit]
}

export default VerifyCodeHook