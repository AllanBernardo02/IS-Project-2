import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from "../constants/actionTypes";
import * as api from '../api/index.js'

export const getPostsCafa = () => async (dispatch) => {
    try {
        
        const { data } = await api.fetchCafaPosts()
        console.log(data);
        dispatch({ type: FETCH_ALL, payload: data})
        
     
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchCafaQuery) => async (dispatch) => {
    try {
       
        const { data: {data} } = await api.fetchCafaPostsBySearch(searchCafaQuery)
        dispatch({type: FETCH_BY_SEARCH, payload: data})

        
    } catch (error) {
        console.log(error);
    }
}

export const createCafaPost = (cafapost) => async (dispatch) => {
    try {
        

        const { data } = await api.createCafaPost(cafapost)
        dispatch({type: CREATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const updateCafaPost = (id, cafapost) => async (dispatch) => {
    try {
        const { data } = await api.updateCafaPost(id, cafapost)
        dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteCafaPost = (id) => async (dispatch) => {
    try {
        await api.deleteCafaPost(id)
        dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error);
    }
}

export const countPostCafa = (id) => async (dispatch) => {
    try {
        const { data } = await api.countPostCafa(id)

        dispatch({type: COUNT, payload: data})
    } catch (error) {
        console.log(error);
    }
}