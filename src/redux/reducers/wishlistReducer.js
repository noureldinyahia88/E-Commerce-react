import {ADD_TO_WISH_LIST, GET_ALL_WISHLIST, REMOVE_FROM_WISH_LIST} from '../type'
import {GET_ERROR} from '../type'


const initial = {
    addWishlist: [],
    removeFromWishlist: [],
    getWishlist: [],
}

const addToWishlistReducer = (state = initial, action) => {
    switch (action.type){
        case ADD_TO_WISH_LIST:
            return {
                ...state,
                addWishlist: action.payload,
            }
            case REMOVE_FROM_WISH_LIST:
            return {
                ...state,
                removeFromWishlist: action.payload,
            }
            case GET_ALL_WISHLIST:
            return {
                ...state,
                getWishlist: action.payload,
            }
            default:
                return state;
    }
}

export default addToWishlistReducer