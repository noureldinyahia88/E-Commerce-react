import {GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY} from '../type'



const initial = {
    subcategory: [],
    loading: true,
}

const subcategoryReducer = (state = initial, action) => {
    switch (action.type){
        case CREATE_SUB_CATEGORY:
            return {
                ...state,
                subcategory: action.payload,
                loading: false,
            }
            case GET_SUB_CATEGORY:
                return {
                    subcategory: action.payload,
                    loading: false,
                }
            case GET_ERROR : return {
                loading: true,
                // display to the user that there are Error
                subcategory: action.payload
            }
            default:
                return state;
    }
}

export default subcategoryReducer