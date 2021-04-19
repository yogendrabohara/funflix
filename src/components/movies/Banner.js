import React from 'react'
import './banner.css'

const Banner = ({singleMovieToDisplay}) => {
    // console.log(movies)
    // console.log(singleMovieToDisplay)
    
    return (
        <header> 
            {/* Background -image */}
            <div className="banner--fadeTop"></div>
            <div className="banner" >
            <img className="bannerimage" src={singleMovieToDisplay.image_path}/>

                
                <div className="banner_contents">
                    {/* Title */}
                    <h1 className="banner_title">{singleMovieToDisplay.name}</h1>
                    {/* div for 2 buttons */}
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>

                
                    {/* description */}
                    <h2 className="banner_description">{singleMovieToDisplay.description}</h2>

            
                </div>

            </div>
            <div className="banner--fadeBottom"></div>
            
        </header>
    )
}

export default Banner
