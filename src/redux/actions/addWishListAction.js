import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsetData";
import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST, GET_ALL_WISHLIST } from "../type";


// add to wishlist
export const addToWishListAction = (body) => async (dispatch) => {
    try {
        
        const response = await useInsertData("/api/v1/wishlist", body);

        dispatch ({
            type: ADD_TO_WISH_LIST,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: ADD_TO_WISH_LIST,
            payload: e.response,
        })
    }
}

// remove from wishlist
export const removeFromWishListAction = (prodId) => async (dispatch) => {
    try {
        
        const response = await useDeleteData(`/api/v1/wishlist/${prodId}`);

        dispatch ({
            type: REMOVE_FROM_WISH_LIST,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: REMOVE_FROM_WISH_LIST,
            payload: e.response,
        })
    }
}

// get all wishlist items
export const getAllWishListAction = () => async (dispatch) => {
    try {
        
        const response = await useGetDataToken(`/api/v1/wishlist`);

        dispatch ({
            type: GET_ALL_WISHLIST,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_ALL_WISHLIST,
            payload: e.response,
        })
    }
}
