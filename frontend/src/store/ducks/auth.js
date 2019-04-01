// store/ducks/auth.js

import api from "../../services/api";
import history from '../../config'

// Action Types

export const Types = {
    MESSAGE_SUCCESS: 'auth/MESSAGE_SUCCESS',
    LOGIN_FAIL: 'auth/LOGIN_FAIL',
    REGISTER_FAIL: 'auth/REGISTER_FAIL',
    PASSWORD_FAIL: 'auth/PASSWORD_FAIL',
    LOGOUT: 'auth/LOGOUT',
};

// Reducer

const initialState = {
    errorLogin: false,
    errorRegister: false,
    message: "",
    isAuth: false
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.MESSAGE_SUCCESS:
            return {
                errorLogin: false,
                errorRegister: false,
                message: action.payload,
                isAuth: true
            }
        case Types.LOGIN_FAIL:
            return {
                errorLogin: true,
                errorRegister: false,
                message: action.payload,
                isAuth: false
            }
        case Types.REGISTER_FAIL:
            return {
                errorLogin: false,
                errorRegister: true,
                message: action.payload,
                isAuth: false
            }
        case Types.PASSWORD_FAIL:
            return {
                errorLogin: false,
                errorRegister: true,
                message: action.payload,
                isAuth: false
            };
        case Types.LOGOUT:
            return {
                errorLogin: false,
                errorRegister: false,
                message: action.payload,
                isAuth: false
            };
        default:
            return state;
    }
}

// Action Creators

export const register = (name, email, password) => {
    return (dispatch) => {
        return api.post("/register", { name, email, password })
            .then(response => {
                dispatch({
                    type: Types.MESSAGE_SUCCESS,
                    payload: response.data.message
                })

                sessionStorage.setItem('access_token', response.data.return.access_token);
                history.push('/')
            })
            .catch(error => {
                dispatch({
                    type: Types.REGISTER_FAIL,
                    payload: error.response.data.message
                })
            });
    }
};

export const login = (email, password) => {
    return (dispatch) => {
        return api.post("/login", { email, password })
            .then(response => {
                dispatch({
                    type: Types.MESSAGE_SUCCESS,
                    payload: response.data.message
                })

                sessionStorage.setItem('access_token', response.data.return.access_token);
                history.push('/')
            })
            .catch(error => {
                console.log(error.response)
                dispatch({
                    type: Types.LOGIN_FAIL,
                    payload: error.response.data.message
                })
            });
    }
};

export function logout() {
    return (dispatch) => {
        sessionStorage.removeItem('access_token')

        dispatch({
            type: Types.LOGOUT,
            payload: "Logoff realizado com sucesso!"
        })

        history.push('/login')
    }
}

export function passwordFail(type) {
    return (dispatch) => {
        switch (type) {
            case "confirm":
                return dispatch({
                    type: Types.PASSWORD_FAIL,
                    payload: "Senhas não conferem!"
                })
            case "length":
                return dispatch({
                    type: Types.PASSWORD_FAIL,
                    payload: "Senha deve ter pelo menos 8 caracteres!"
                })
            default:
                return dispatch({
                    type: Types.PASSWORD_FAIL,
                    payload: "Ocorreu um erro, tente novamente!"
                })
        }
    }
}
