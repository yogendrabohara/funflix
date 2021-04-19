import React from 'react'
import MovieRow from './MovieRow'
import Banner from './Banner'
import { connect } from 'react-redux'
import {useEffect, useState } from 'react'
import { fetchMovies } from '../../redux/actions'
import apis from '../../redux/apis/apis'
import Nav from './Nav'
import { Link, useHistory} from 'react-router-dom'



const MoviesList = ({fetchMovie, movies, token}) => {
    const history = useHistory()
    const fetchData = async () => {
        await apis.get('/movies/', {headers:{Authorization: 'Token '+ token}})
        .then(response =>  fetchMovie(response.data.results))
        .catch(error => console.log(error))
    }
    // lets fetch apis
    useEffect(() => {
        // effect
        if(token){
            fetchData()
        }
        else {
            history.push('/login')
        }
        ;
    }, [])

    const randomNumber = Math.floor(Math.random() * movies.length-1);

    return (
        <div>
            {/* navbar */}
            <Nav />

            {/* Banner */}
            {movies.length !== 0 && <Banner singleMovieToDisplay={movies[randomNumber]}/>}
            {/* different number of rows */}
            <div>
                <MovieRow title="Continue watching for yogi" id={0}/>
                <MovieRow title="My List" id={1}/>
                <MovieRow title="Romantic Movies" id={2}/>
                <MovieRow title="Trending Now" id={3}/>
                <MovieRow title="Asian TV Drama" id={4}/>
                <MovieRow title="Action Movies" id={5}/>
                <MovieRow title="Netflix Originals" id={6}/>
                <MovieRow title="Hindi Movies" id={7}/>

            </div>
            
            
            {/* footer */}
        </div>
    )
}

const mapStateToProps = state => ({
    token: state.token,
    movies: state.movies
})


const mapDispatchToProps = dispatch => ({
    fetchMovie: movie => dispatch(fetchMovies(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)
