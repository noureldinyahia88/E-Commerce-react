import {ADD_TO_WISH_LIST} from '../type'
import {GET_ERROR} from '../type'


const initial = {
    addWishlist: [],
}

const addToWishlistReducer = (state = initial, action) => {
    switch (action.type){
        case ADD_TO_WISH_LIST:
            return {
                ...state,
                addWishlist: action.payload,
            }
            default:
                return state;
    }
}

export default addToWishlistReducer