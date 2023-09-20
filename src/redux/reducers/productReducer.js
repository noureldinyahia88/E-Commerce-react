import {GET_ERROR, CREATE_PRODUCTS, GET_ALL_PRODUCTS} from '../type'



const initial = {
    products: [],
    allProducts:[],
    loading: true
}

const productReducer = (state = initial, action) => {
    switch (action.type){
        case CREATE_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }
            case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                loading: false,
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