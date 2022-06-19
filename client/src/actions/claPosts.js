import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const getPostsCla = () => async (dispatch) => {
    try {
        const { data } = await api.fetchClaPosts()
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchClaQuery) => async (dispatch) => {
    try {
        const { data:{ data } } = await api.fetchClaPostsBySearch(searchClaQuery)

        dispatch({ type: FETCH_BY_SEARCH, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const getPostsBySearch2 = (searchClaQuery) => async (dispatch) => {
    try {
        const { data:{ data } } = await api.fetchClaPostsBySearch2(searchClaQuery)

        dispatch({ type: FETCH_BY_SEARCH, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createClaPost = (clapost) => async (dispatch) => {
    try {
        const { data } = await api.createClaPost(clapost)
        dispatch( {type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateClaPost = (id, clapost) => async (dispatch) => {
    try {
        const { data } = await api.updateClaPost(id, clapost)
        
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const countPostCla = (id) => async (dispatch) => {

    try {
        const { data } = await api.countPostCla(id)
        dispatch({type: COUNT, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteClaPost = (id) => async (dispatch) => {
    try {
        await api. deleteClaPost(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}