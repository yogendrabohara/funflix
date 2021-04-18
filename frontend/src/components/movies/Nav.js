import React from 'react'
import './nav.css'
import {Link, useHistory } from 'react-router-dom'
// import MoviesList from './MoviesList'
import { logout } from '../../redux/actions'
import { connect } from 'react-redux'
// import apis from "../../redux/apis/apis"
const Nav = (props) => {
    
    
    const history = useHistory();
    const handleSignout = () => {
        props.signout()
        localStorage.removeItem('token')
        history.push('/login')
    }

    
    return (
        <div className="nav">
            <img className="nav_logo" src="https://img.icons8.com/color/144/000000/netflix.png" alt="netflix-logo"/>
            <div className="navbar">
                <ul className="nav_items">
                    <Link to='/' className="linkpage"><li className="nav_item">Home</li></Link>
                    <Link to='/tvshows' className="linkpage"><li className="nav_item">TV Shows</li></Link>
                    <Link to='/movies' className="linkpage"><li className="nav_item">Movies</li></Link>
                    <Link to='/new&popular' className="linkpage"><li className="nav_item">New & popular</li></Link>
                    <Link to='/mylist' className="linkpage"><li className="nav_item">MyList</li></Link>

                </ul>

            </div>
            {/* <input  className="search_item" type="text" value="search" name="search" placeholder="search"/> */}
            {/* <button type="submit" onClick={searchHandle} className="btn btn-primary">Search</button> */}
            <img className="nav_avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="netflix-avatar"/>
            <button type="button" className="btn btn-primary" onClick={handleSignout}>Sign out</button>
        </div>
        
    )
}

const mapDispatchToProps = dispatch => ({
    signout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Nav)
