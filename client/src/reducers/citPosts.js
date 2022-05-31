
import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT } from "../constants/actionTypes";

export default (citposts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case COUNT:
            return citposts.map((citpost) => (citpost._id === action.payload._id ? action.payload : citpost))
        case CREATE:
            return [...citposts, action.payload]
        case UPDATE:
            return citposts.map((citpost) => (citpost._id === action.payload._id ? action.payload : citpost))
        case DELETE:
            return citposts.filter((citpost) => citpost._id !== action.payload)

        default:
            return citposts
    }
}