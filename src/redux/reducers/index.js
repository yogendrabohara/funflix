import { FETCH_MOVIES, SET_TOKEN, RESET_STATE } from "../actions/actiontypes";

const rootReducers = (state={token:'', movies:[]}, action) => {
    switch(action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case RESET_STATE:
            return {token:'', movies:[]}

        default:
        return state
    }
} 


export default rootReducers