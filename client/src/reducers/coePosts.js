import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT } from "../constants/actionTypes";

export default (coeposts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case COUNT:
            return coeposts.map((coepost) => (coepost._id === action.payload._id ? action.payload : coepost))
        case CREATE:
            return [...coeposts, action.payload]
        case UPDATE:
            return coeposts.map((coepost) => (coepost._id === action.payload._id ? action.payload : coepost))
        case DELETE:
            return coeposts.filter((coepost) => coepost._id !== action.payload)
    
        default:
            return coeposts;
    }
}