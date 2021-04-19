import apis from '../apis/apis'
import { FETCH_MOVIES, RESET_STATE, SET_TOKEN } from './actiontypes';

// for setting token in store
export const storeToken = (token) => {
    return {type: SET_TOKEN, payload: token}
}




// For movies
export const fetchMovies = (movies) => {
    return {type: FETCH_MOVIES, payload: movies}
}


//for logut

export const logout = () => {
    return {type: RESET_STATE}
}


