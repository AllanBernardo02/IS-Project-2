import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const getPostsCit = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCitPosts()
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchCitQuery) => async (dispatch) => {
    try {
        const { data:{ data } } = await api.fetchCitPostsBySearch(searchCitQuery)

        dispatch({ type: FETCH_BY_SEARCH, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const getPostsBySearch2 = (searchCitQuery) => async (dispatch) => {
    try {
        const { data:{ data } } = await api.fetchCitPostsBySearch2(searchCitQuery)

        dispatch({ type: FETCH_BY_SEARCH, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createCitPost = (citpost) => async (dispatch) => {
    try {
        const { data } = await api.createCitPost(citpost)
        dispatch( {type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateCitPost = (id, citpost) => async (dispatch) => {
    try {
        const { data } = await api.updateCitPost(id, citpost)
        
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const countPostCit = (id) => async (dispatch) => {

    try {
        const { data } = await api.countPostCit(id)
        dispatch({type: COUNT, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteCitPost = (id) => async (dispatch) => {
    try {
        await api. deleteCitPost(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}