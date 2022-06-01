import { FETCH_ALL, CREATE, UPDATE , DELETE } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const getPostsCoor= () => async (dispatch) => {
    try {
        const {data } = await api.fetchCoorPosts()
        dispatch({ type: FETCH_ALL, payload: data}) 
    } catch (error) {
        console.log(error)
    }
}

export const createCoorPost = (coorpost) => async (dispatch ) => {
    try {
        const{ data } = await api.createCoorPost(coorpost)

        dispatch( {type: CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateCoorPost = (id, coorpost) => async (dispatch) => {
    try {
        const { data } = await api.updateCoorPost(id, coorpost)

        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteCoorPost = (id) => async (dispatch)=> {
    try {
        await api.deleteCoorPost(id)

        dispatch({ type: DELETE,payload: id})
    } catch (error) {
        console.log(error);
    }
}