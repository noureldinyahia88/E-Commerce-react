import { useInsertDataWithImage } from '../../hooks/useInsetData'
import {GET_ERROR, CREATE_PRODUCTS} from '../type'


// create product 
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