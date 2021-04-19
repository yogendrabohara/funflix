import React, { useState } from 'react'
import {useEffect } from 'react'
import { fetchMovies } from '../../redux/actions'
import apis from '../../redux/apis/apis'
import { connect } from 'react-redux'
import './movierow.css'
import { Link} from 'react-router-dom'

// import Youtube from 'react-youtube'
// import movieTrailer from 'movie-trailer'


const MovieRow = ({title,id, fetchMovie, movies, token}) => {

    return (
        <section className="row">

            {/* Title */}
            <h3>{title}</h3>
            <div className="row_posters">
                {/* container -> posters */}
                {
                    movies.filter(movie => movie.category_id === id).map(item =>  (
                        <Link to={"/movieitem/"+ item.id} key={item.id}><img 
                            key={item.name}
                            className="row_poster"
                            src={item.image_path} 
                            alt={item.name} 
                            // onClick={()=>handleClick(item)}
                            /></Link>
                    ))
                }


            </div>
            {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
        </section>
    )
}

const mapStateToProps = state => ({
    
    movies: state.movies
})


const mapDispatchToProps = dispatch => ({
    fetchMovie: movie => dispatch(fetchMovies(movie))
})

export default  connect(mapStateToProps, mapDispatchToProps)(MovieRow)


// comes inside the components
    // const [trailerUrl, setTrailerUrl] = useState('')
    
    // const fetchData = async () => {
    //     await apis.get('/movies/', {headers:{Authorization: 'Token '+ token}})
    //     .then(response =>  fetchMovie(response.data.results))
    //     .catch(error => console.log(error))
    // }

    
    // // lets fetch apis
    // useEffect(() => {
    //     // effect
    //     fetchData();
    // }, [])

    // const opts = {
    //     height: '450',
    //     width: '100%',
    //     playerVars: {
    //     //   https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     }}
    // const handleClick = (movie) => {
    //     if(trailerUrl){
    //         setTrailerUrl('')
    //     }else {
    //         movieTrailer( movie?.name || "")
    //             .then((url) => {
    //                 const urlParams = new URLSearchParams(new URL(url).search)
    //                 urlParams.get('v')

    //             })
    //             .catch(error => console.log(error))
    //     }

    // };
