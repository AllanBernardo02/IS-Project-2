import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (cieposts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case FETCH_BY_SEARCH:
            return action.payload
        case COUNT:
            return cieposts.map((ciepost) => (ciepost._id === action.payload._id ? action.payload : ciepost))
        case CREATE:
            return [...cieposts, action.payload]
        case UPDATE:
            return cieposts.map((ciepost) => (ciepost._id === action.payload._id ? action.payload : ciepost))
        case DELETE:
            return cieposts.filter((ciepost) => ciepost._id !== action.payload)
    
        default:
            return cieposts;
    }
}