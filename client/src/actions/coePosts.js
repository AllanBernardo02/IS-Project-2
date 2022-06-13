import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT,FETCH_BY_SEARCH } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const getPostsCoe = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCoePosts()
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchCoeQuery) => async (dispatch) => {
    try {
        const { data:{ data } } = await api.fetchCoePostsBySearch(searchCoeQuery)

        dispatch({ type: FETCH_BY_SEARCH, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createCoePost = (coepost) => async (dispatch) => {
    try {
        const { data } = await api.createCoePost(coepost)

        dispatch( {type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateCoePost = (id, coepost) => async (dispatch) => {
    try {
        const { data } = await api.updateCoePost(id, coepost)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const countPost = (id) => async (dispatch) => {

    try {
        const { data } = await api.countPost(id)

        dispatch({type: COUNT, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteCoePost = (id) => async (dispatch) => {
    try {
        await api.deleteCoePost(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}