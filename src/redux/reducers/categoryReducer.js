import {CREATE_CATEGORY, GET_ALL_CATEGORY} from '../type'
import {GET_ERROR} from '../type'


const initial = {
    category: [],
    loading: true
}

const categoryReducer = (state = initial, action) => {
    switch (action.type){
        case GET_ALL_CATEGORY:
            return {
                ...state,
                category: action.payload,
                loading: false
            }
            case CREATE_CATEGORY:
                return {
                    category:action.payload,
                    loading:false
                }
            case GET_ERROR : return {
                loading: true,
                // display to the user that there are Error
                category: action.payload
            }
            default:
                return state;
    }
}

export default categoryReducer