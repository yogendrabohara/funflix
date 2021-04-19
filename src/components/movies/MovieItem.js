import React from 'react'
import Banner from './Banner'
import { connect } from 'react-redux'
import {useParams} from 'react-router'

const MovieItem = ({movies}) => {
    console.log(movies)
    const {id} = useParams()
    console.log(id)
    
    const selectedMovie = movies.find(movie => movie.id === parseInt(id))
    console.log(selectedMovie)



    return (
        <div>
            {/* Banner */}
            <Banner singleMovieToDisplay={selectedMovie}/>
            {/* movie details */}


        </div>
    )
}


const mapStateToProps = state => ({
    movies: state.movies
})



export default connect(mapStateToProps, null)(MovieItem)

