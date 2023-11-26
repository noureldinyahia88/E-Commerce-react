import { useInsertData } from '../../hooks/useInsetData';
import {CREATE_REVIEW} from '../type'

// set Review
export const createReview = (prodID, body) => async (dispatch) => {
    try {
        
        const response = await useInsertData(`/api/v1/products/${prodID}/reviews`, body);

        dispatch ({
            type: CREATE_REVIEW,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: CREATE_REVIEW,
            payload: e.response,
        })
    }
}