//this is object have all reducer that i created

import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from "./subcategoryReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./rateReducer";
import addToWishlistReducer from "./wishlistReducer";

export default combineReducers ({
    allCategory:categoryReducer,
    allBrand:brandReducer,
    subCategory:subcategoryReducer,
    allProducts: productReducer,
    authReducer: authReducer,
    reviewReducer: reviewReducer,
    addToWishlistReducer: addToWishlistReducer,
})