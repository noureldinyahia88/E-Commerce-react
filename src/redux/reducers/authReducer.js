import { CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER, FORGET_PASSWORD, VERIFY_CODE, RESET_PASSWORD} from '../type'

const initial = {
    createUser: [],
    loginUser: [],
    currentUser: [],
    forgetPassword: [],
    verifyCode: [],
    resetPassword: [],
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
            case FORGET_PASSWORD:
            return {
                ...state,
                forgetPassword: action.payload,
            }
            case VERIFY_CODE:
            return {
                ...state,
                verifyCode: action.payload,
            }
            case RESET_PASSWORD:
            return {
                ...state,
                resetPassword: action.payload,
            }
            default:
                return state;
            }
}
export default authReducer