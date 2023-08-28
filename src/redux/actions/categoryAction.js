import {CREATE_CATEGORY, GET_ALL_CATEGORY} from '../type'
import {GET_ERROR} from '../type'
import useGetData from '../../hooks/useGetData'
import {useInsertDataWithImage} from '../../hooks/useInsetData'
// import baseURL from '../../Api/baseURL'

// get all category 
export const getAllCategory = (limit) => async (dispatch) => {
    try {
        
        const response = await useGetData(`/api/v1/categories?limit=${limit}`)

        console.log(response);
        dispatch ({
            type: GET_ALL_CATEGORY,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e
        })
    }
}

// get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        
        const response = await useGetData(`/api/v1/categories?limit=3&page=${page}`)

        console.log(response);
        dispatch ({
            type: GET_ALL_CATEGORY,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ERROR,
            payload: "Error "+ e,
        })
    }
}

// get create category 
export const createCategory = (formData) => async (dispatch) => {
    try {
        
        const response = await useInsertDataWithImage(`/api/v1/categories`, formData)

        dispatch ({
            type: CREATE_CATEGORY,
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