import { combineReducers } from 'redux'
import moviesReducers from './userReducers'

export default combineReducers ({
    movies: moviesReducers
})