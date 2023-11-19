import { useEffect, useState } from 'react'
import notify from '../../hook/useToastify'
import { useDispatch, useSelector } from 'react-redux'


const AddRateHook = () => {
    // add rate text state and rate num
    const dispatch = useDispatch()

    const [rateText,setRateText] = useState("")
    const [rateValue,setRateValue] = useState(0)

    const [loading, setLoading] = useState(true)

    const onChangeRateText= (e) => {
      setRateText(e.target.value)
    }
    const onChangedRateValue = (val) => {
      setRateValue(val)
    }

    var user = ''
    if(localStorage.getItem("user") !== null){
      user =JSON.parse(localStorage.getItem("user"))
    }

    const onSubmit = () => {
      if(rateText === ''){
        notify("Please enter your comment.", "error")
      }
    }
    return [rateText, rateValue, onChangeRateText, onChangedRateValue, user, onSubmit]
}

export default AddRateHook