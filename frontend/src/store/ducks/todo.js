// store/ducks/todo.js

import api from "../../services/api"

import { logout } from './auth'

// Action Types

export const Types = {
    FETCH_TODOS: 'todo/FETCH_TODOS',
    CLEAR_TODOS: 'todo/CLEAR_TODOS',
    ADD_TODO: 'todo/ADD_TODO',
    DELETE_TODO: 'todo/DELETE_TODO',
}

// Reducer

const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.FETCH_TODOS:
            return action.payload
        case Types.CLEAR_TODOS:
            return initialState
        case Types.ADD_TODO:
            return [...state, action.payload]
        case Types.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        default:
            return state
    }
}

// Action Creators

export const fetchTodos = () => {
    return (dispatch) => {
        return api.get('/todo')
            .then(response => {
                dispatch({
                    type: Types.FETCH_TODOS,
                    payload: response.data.return
                })
            })
            .catch(error => dispatch(logout()))
    }
}

export const clearTodos = () => {
    return (dispatch) => {
        dispatch({
            type: Types.CLEAR_TODOS
        })
    }
}

export const addTodo = (title) => {
    return (dispatch) => {
        return api.post(`/todo`, { title })
            .then(response => {
                dispatch({
                    type: Types.ADD_TODO,
                    payload: {
                        id: response.data.return.id,
                        title: response.data.return.title,
                    }
                })
            })
            .catch(error => dispatch(logout()))
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        return api.delete(`/todo/${id}`)
            .then(response => {
                dispatch({
                    type: Types.DELETE_TODO,
                    payload: id
                })
            })
            .catch(error => dispatch(logout()))
    }
}