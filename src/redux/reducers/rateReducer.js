import {CREATE_REVIEW} from '../type'



const initial = {
    createReview: [],
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
        
            default:
                return state;
    }
}

export default reviewReducer