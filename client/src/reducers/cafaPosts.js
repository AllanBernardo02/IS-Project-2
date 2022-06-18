
import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (cafaposts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case FETCH_BY_SEARCH:
            return action.payload
        case COUNT:
            return cafaposts.map((cafapost) => (cafapost._id === action.payload._id ? action.payload : cafapost))
        case CREATE:
            return [...cafaposts, action.payload]
        case UPDATE:
            return cafaposts.map((cafapost) => (cafapost._id === action.payload._id ? action.payload : cafapost))
        case DELETE:
            return cafaposts.filter((cafapost) => cafapost._id !== action.payload)

        default:
            return cafaposts
    }
}