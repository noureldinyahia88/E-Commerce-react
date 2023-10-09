//this is object have all reducer that i created

import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'
import subcategoryReducer from "./subcategoryReducer";
import productReducer from "./productReducer";

export default combineReducers ({
    allCategory:categoryReducer,
    allBrand:brandReducer,
    subCategory:subcategoryReducer,
    allProducts: productReducer
    
})