
import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (claposts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case FETCH_BY_SEARCH:
            return action.payload
        case COUNT:
            return claposts.map((clapost) => (clapost._id === action.payload._id ? action.payload : clapost))
        case CREATE:
            return [...claposts, action.payload]
        case UPDATE:
            return claposts.map((clapost) => (clapost._id === action.payload._id ? action.payload : clapost))
        case DELETE:
            return claposts.filter((clapost) => clapost._id !== action.payload)

        default:
            return claposts
    }
}