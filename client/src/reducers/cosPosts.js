import { FETCH_ALL, CREATE, UPDATE, DELETE, COUNT, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from "../constants/actionTypes";

// export default (state = { isLoading: true, cosposts: []}, action) => {
//     switch (action.type) {
//         case START_LOADING:
//             return { ... state, isLoading: true}
//         case END_LOADING:
//             return { ... state, isLoading: false}
//         case FETCH_ALL:
//             return {
//                 ...state,
//                  cosposts: action.payload.data
//             }
//         case FETCH_BY_SEARCH:
//             return { ... state, cosposts: action.payload}
//         case COUNT:
//             return {... state, cosposts: state.cosposts.map((cospost) => (cospost._id === action.payload._id ? action.payload : cospost))}
//         case CREATE:
//             return { ... state, cosposts: [... state.cosposts, action.payload]}
//         case UPDATE:
//             return {... state, cosposts:  state.cosposts.map((cospost) => (cospost._id === action.payload._id ? action.payload : cospost))}
//         case DELETE:
//             return { ... state, cosposts:  state.cosposts.filter((cospost) => cospost._id !== action.payload)}

//         default:
//            return state
//     }
// }

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