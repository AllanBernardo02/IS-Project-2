import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT,FETCH_BY_SEARCH } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const getPostsCie = () => async (dispatch) => {
    try {
        const { data } = await api.fetchCiePosts()

        console.log('server data in cie', {
            data
          })
      
        dispatch({ type: FETCH_ALL, payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchCieQuery) => async (dispatch) => {
    try {
        const { data:{ data } } = await api.fetchCiePostsBySearch(searchCieQuery)

        dispatch({ type: FETCH_BY_SEARCH, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const createCiePost = (ciepost) => async (dispatch) => {
    try {
        const { data } = await api.createCiePost(ciepost)

        dispatch( {type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updateCiePost = (id, ciepost) => async (dispatch) => {
    try {
        const { data } = await api.updateCiePost(id, ciepost)

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

export const deleteCiePost = (id) => async (dispatch) => {
    try {
        await api.deleteCiePost(id)

        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}