import useGetData from '../../hooks/useGetData'
import { useInsertDataWithImage } from '../../hooks/useInsetData'
import {GET_ERROR, CREATE_PRODUCTS, GET_ALL_PRODUCTS, GET_PRODUCT_DETAILS, GET_PRODUCT_LIKE} from '../type'


// create product with pagination
export const createProduct = (formatData) => async (dispatch) => {
    try {
        
        const response = await useInsertDataWithImage("/api/v1/products", formatData)

        dispatch ({
            type: CREATE_PRODUCTS,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e,
        })
    }
}

// get all product with pagination
export const getAllProduct = () => async (dispatch) => {
    try {
        
        const response = await useGetData("/api/v1/products")

        dispatch ({
            type: GET_ALL_PRODUCTS,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e,
        })
    }
}

// get one product with id
export const getOneProduct = (id) => async (dispatch) => {
    try {
        
        const response = await useGetData(`/api/v1/products/${id}`)

        dispatch ({
            type: GET_PRODUCT_DETAILS,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e,
        })
    }
}

// get the smiler products

export const getProductLike = (id) => async (dispatch) => {
    try {
        
        const response = await useGetData(`/api/v1/products?category=${id}`)

        dispatch ({
            type: GET_PRODUCT_LIKE,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e,
        })
    }
}