import { useInsertData } from "../../hooks/useInsetData";
import { ADD_TO_WISH_LIST } from "../type";


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