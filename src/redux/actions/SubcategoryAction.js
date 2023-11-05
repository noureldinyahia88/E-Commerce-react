import {GET_ERROR, CREATE_SUB_CATEGORY, GET_SUB_CATEGORY} from '../type'
import { useInsertData } from '../../hooks/useInsetData'
import {useGetData} from '../../hooks/useGetData'

// create subcategory 
export const createSubcategory = (data) => async (dispatch) => {
    try {
        
        const response = await useInsertData("/api/v1/subcategories", data)

        dispatch ({
            type: CREATE_SUB_CATEGORY,
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

// get subcategory by ID
export const getOneCategory = (id) => async (dispatch) => {
    try {
        
        const response = await useGetData(`/api/v1/categories/${id}/subcategories`)
        console.log(response.data);
        dispatch ({
            type: GET_SUB_CATEGORY,
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