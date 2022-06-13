import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (cosposts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case FETCH_BY_SEARCH:
            return action.payload
        case COUNT:
            return cosposts.map((cospost) => (cospost._id === action.payload._id ? action.payload : cospost))
        case CREATE:
            return [...cosposts, action.payload]
        case UPDATE:
            return cosposts.map((cospost) => (cospost._id === action.payload._id ? action.payload : cospost))
        case DELETE:
            return cosposts.filter((cospost) => cospost._id !== action.payload)

        default:
            return cosposts
    }
}