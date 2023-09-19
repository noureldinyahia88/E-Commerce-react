import {GET_ERROR, CREATE_PRODUCTS} from '../type'



const initial = {
    product: [],
    loading: true
}

const productReducer = (state = initial, action) => {
    switch (action.type){
        case CREATE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
            case GET_ERROR : return {
                loading: true,
                // display to the user that there are Error
                products: action.payload
            }
            default:
                return state;
    }
}

export default productReducer