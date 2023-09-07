import {CREATE_BRAND, GET_ALL_BRAND, GET_ERROR} from '../type'
import useGetData from '../../hooks/useGetData'
import {useInsertDataWithImage} from '../../hooks/useInsetData'

// get all brand 
export const getAllBrand = (limit) => async (dispatch) => {
    try {
        
        const response = await useGetData(`/api/v1/brands?limit=${limit}`)

        console.log(response);
        dispatch ({
            type: GET_ALL_BRAND,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e
        })
    }
}

// get all brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        
        const response = await useGetData(`/api/v1/brands?limit=6&page=${page}`)

        console.log(response);
        dispatch ({
            type: GET_ALL_BRAND,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e,
        })
    }
}

// get create brand 
export const createBrand = (formData) => async (dispatch) => {
    try {
        
        const response = await useInsertDataWithImage(`/api/v1/brands`, formData)

        dispatch ({
            type: CREATE_BRAND,
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