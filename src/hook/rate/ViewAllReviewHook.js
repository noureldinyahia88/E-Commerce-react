import { useEffect, useState } from 'react'
import notify from '../../hook/useToastify'
import { useDispatch, useSelector } from 'react-redux'
import { allReviewProduct, createReview } from '../../redux/actions/rateAction'


const ViewAllReviewHook = (id) => {
    
    const dispatch = useDispatch()


    const [loading, setLoading] = useState(true)


    
    const allReview = useSelector(state => state.reviewReducer.allReviewProduct)


    useEffect(() => {
    setLoading(true)
    dispatch(allReviewProduct(id, 1, 5))
    setLoading(false)
}, [])

const onPress = async (page) => {
    await dispatch(allReviewProduct(id, page, 1))
}

    return [allReview, onPress]
}

export default ViewAllReviewHook