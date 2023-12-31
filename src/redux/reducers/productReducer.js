import {GET_ERROR, CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE, DELETE_PRODUCT, UPDATE_PRODUCT} from '../type'



const initial = {
    products: [],
    allProducts:[],
    oneProduct:[],
    productLike:[],
    deleteProduct:[],
    upDateProducts:[],
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
            case GET_PRODUCT_DETAILS:
            return {
                oneProduct: action.payload,
                loading: false,
            }
            case GET_PRODUCT_LIKE:
            return {
                ...state,
                productLike: action.payload,
                loading: false,
            }
            case DELETE_PRODUCT:
            return {
                ...state,
                deleteProduct: action.payload,
                loading: false,
            }
            case UPDATE_PRODUCT:
            return {
                ...state,
                upDateProducts: action.payload,
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