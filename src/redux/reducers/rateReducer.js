import {CREATE_REVIEW, ALL_REVIEW_PRODUCT, DELETE_REVIEW_PRODUCT, UPDATE_REVIEW_PRODUCT} from '../type'



const initial = {
    createReview: [],
    allReviewProduct: [],
    deleteReview: [],
    updateReview: [],
    loading: true
}

const reviewReducer = (state = initial, action) => {
    switch (action.type){
        case CREATE_REVIEW:
            return {
                ...state,
                createReview: action.payload,
                loading: false,
            }
            case ALL_REVIEW_PRODUCT:
            return {
                ...state,
                allReviewProduct: action.payload,
                loading: false,
            }
            case DELETE_REVIEW_PRODUCT:
            return {
                ...state,
                deleteReview: action.payload,
            }
            case UPDATE_REVIEW_PRODUCT:
            return {
                ...state,
                updateReview: action.payload,
            }
            default:
                return state;
    }
}

export default reviewReducer