import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const getPostsCos = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCosPosts()
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const createCosPost = (cospost) => async (dispatch) => {
    try {
        const { data } = await api.createCosPost(cospost)
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateCosPost = (id, cospost) => async (dispatch) => {
    try {
        const { data } = await api.updateCosPost(id, cospost)
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteCosPost = (id) => async (dispatch) => {
    try {
        await api.deleteCosPost(id)
        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const countPostCos = (id) => async (dispatch) => {
    try {
        const { data } = await api.countPostCos(id)

        dispatch({type: COUNT, payload: data})
    } catch (error) {
        console.log(error);
    }
}