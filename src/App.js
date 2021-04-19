import React from 'react'
import Home from './components/home/Home'
import './App.css'
import {BrowserRouter as Router , Route, Link } from 'react-router-dom'
import SignIn from './components/login/LogIn'
import SignUp from './components/signup/SignUp'
import MoviesList from './components/movies/MoviesList'
import MovieItem from './components/movies/MovieItem'
import {storeToken} from './redux/actions/index'
import { connect } from 'react-redux'






const App = ({setToken}) => {
  const savedToken = localStorage.getItem('token')
  setToken(savedToken)

  return (
    <Router>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/movies">
        <MoviesList />
      </Route>
      <Route path="/movieitem/:id">
        <MovieItem />
      </Route>
      
         
    </Router>

  );
}

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(storeToken(token))
})


export default connect(null, mapDispatchToProps)(App);
