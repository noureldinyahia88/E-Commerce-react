import {CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER, FORGET_PASSWORD, VERIFY_CODE, RESET_PASSWORD} from '../type'
import {useInsertData} from '../../hooks/useInsetData'
import {useGetDataToken} from '../../hooks/useGetData';
import { useInsUpdateData } from '../../hooks/useEditData';

// create a new user
export const createNewUser = (data) => async (dispatch) => {
    try {
        
        const response = await useInsertData(`/api/v1/auth/signup`, data, {
            headers: {
              Authorization: 'Bearer your-token-here',
            },
          });

        dispatch ({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: e.response,
        })
    }
}

// Login
export const loginUser = (data) => async (dispatch) => {
    try {
        
        const response = await useInsertData(`/api/v1/auth/login`, data, {
            headers: {
              Authorization: 'Bearer your-token-here',
            },
          });

        dispatch ({
            type: LOGIN_USER,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
        })
    }
}

// Get Current User
export const currentUser = () => async (dispatch) => {
    try {
        
        const response = await useGetDataToken(`/api/v1/users/getMe`, {
            headers: {
              Authorization: 'Bearer your-token-here',
            },
          });

        dispatch ({
            type: GET_CURRENT_USER,
            payload: response,
        })
    } catch (e) {
        dispatch({
            type: GET_CURRENT_USER,
            payload: e.response,
        })
    }
}

// Login
export const forgetPassword = (data) => async (dispatch) => {
    try {
        
        const response = await useInsertData(`/api/v1/auth/forgotPasswords`, data, {
            headers: {
            Authorization: 'Bearer your-token-here',
            },
        });

        dispatch ({
            type: FORGET_PASSWORD,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response,
        })
    }
}

// VerifyCode
export const verifyCode = (data) => async (dispatch) => {
    try {
        
        const response = await useInsertData(`/api/v1/auth/verifyResetCode`, data, {
            headers: {
            Authorization: 'Bearer your-token-here',
            },
        });

        dispatch ({
            type: VERIFY_CODE,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: VERIFY_CODE,
            payload: e.response,
        })
    }
}

// set New password
export const setNewPassword = (data) => async (dispatch) => {
    try {
        
        const response = await useInsUpdateData(`/api/v1/auth/resetPassword`, data, {
            headers: {
            Authorization: 'Bearer your-token-here',
            },
        });

        dispatch ({
            type: RESET_PASSWORD,
            payload: response,
            loading: true
        })
    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
        })
    }
}