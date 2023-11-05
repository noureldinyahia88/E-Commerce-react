import { CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER} from '../type'

const initial = {
    createUser: [],
    loginUser: [],
    currentUser: [],
    loading: true,
}

const authReducer = (state = initial, action) =>{
    switch(action.type){
        case CREATE_NEW_USER:
            return {
                ...state,
                createUser: action.payload,
            }
            case LOGIN_USER:
            return {
                ...state,
                loginUser: action.payload,
            }
            case GET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            }
            default:
                return state;
            }
}
export default authReducer