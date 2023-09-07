//this is object have all reducer that i created

import { combineReducers } from "redux";
import categoryReducer from './categoryReducer'
import brandReducer from './brandReducer'

export default combineReducers ({
    allCategory:categoryReducer,
    allBrand:brandReducer,
})