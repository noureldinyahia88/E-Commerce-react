import { useGetDataToken } from '../../hooks/useGetData';
import { useInsertData } from '../../hooks/useInsetData';
import {CREATE_REVIEW , ALL_REVIEW_PRODUCT} from '../type'

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

// Get All product review
export const allReviewProduct = (prodID, page, limit) => async (dispatch) => {
    try {
        
        const response = await useGetDataToken(`/api/v1/products/${prodID}/reviews?page=${page}&limit=${limit}`);

        dispatch ({
            type: ALL_REVIEW_PRODUCT,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: ALL_REVIEW_PRODUCT,
            payload: e.response,
        })
    }
}