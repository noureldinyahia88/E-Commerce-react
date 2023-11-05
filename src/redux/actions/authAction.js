import {CREATE_NEW_USER, LOGIN_USER, GET_CURRENT_USER} from '../type'
import {useInsertData} from '../../hooks/useInsetData'
import {useGetData, useGetDataToken} from '../../hooks/useGetData';

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