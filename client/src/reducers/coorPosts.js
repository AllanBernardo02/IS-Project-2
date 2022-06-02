import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (coorposts= [], action ) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...coorposts, action.payload]
        case UPDATE:
            return coorposts.map((coorpost)=> (coorpost._id ===action.payload._id ? action.payload : coorpost))
        case DELETE:
            return coorposts.filter((coorpost) => coorpost._id !==action.payload)
    
        default:
           return coorposts;
    }
}