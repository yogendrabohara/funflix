import React from 'react'
import Header from '../header/Header'
import { Link } from 'react-router-dom'
import nettv from '../../images/nettv.png'
import net2 from '../../images/net2.jpg'
import netthree from '../../images/netthree.png'
import './home.css'


const Home = () => {
    return (
        <>
        <section id="background">
            <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <Header/>
                </div>
                <div className="col-6">
                    <Link to="/login"><button id="buttonone" type="submit" className="btn btn-danger">SignIn</button></Link>

                </div>
            </div>
            <div className="container">
                <div className="card">
                    <div className="card-body text-center" >
                        <h1 className="title">Unlimited movies, TV shows, and more.</h1>
                        <h3 className="subtitle">Watch anywhere. Cancel anytime.</h3>
                        <h3 className="subtitle">Ready to watch? Enter your email to create or restart your membership.</h3>
                        <input type="text" className="emailsignup" name="emailsignup" placeholder="Email address"/>
                        <Link to="/signup"><button type="submit" className="btn btn-danger">Get Started <span></span> </button></Link>

                    </div>
                   
                </div>
                
            </div>
        </div>
        </section>
        
        <section id="sectiontwo" className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1>Enjoy on your TV.</h1>
                    <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, AppleTV, Blu-ray players, and more.</h3>
                    
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="imagedisplayone" src = {nettv}/>
                </div>
            </div>  
        </section>
        <section id="sectiontwo" className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1>Download your shows to watch offline.</h1>
                    <h3>Save your favorites easily and always have something to watch.</h3>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="imagedisplaytwo" src = {net2}/>
                </div>
            </div>  
        </section>
        <section id="sectiontwo" className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <h1>Watch everywhere.</h1>
                    <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="imagedisplaythree" src = {netthree}/>
                </div>
            </div>  
        </section>

        <section id="sectiontwo" className="container">
            <div className="row">
                <div className="col-lg-12 col-md-6 text-center">
                    <div className="jumbotron">
                    <h3>Frequently Asked Questions</h3>

                    <button type="button" className="collapsible mt-2 mb-2">What is Netflix?</button>
                    <div className="content">
                        <p>Hello world</p>
                    </div>
                    <button type="button" className="collapsible mt-2 mb-2">How much does Netflix cost?</button>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <button type="button" className="collapsible mt-2 mb-2">Where can I watch?</button>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <button type="button" className="collapsible mt-2 mb-2">How do I cancel?</button>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <button type="button" className="collapsible mt-2 mb-2">What do I watch on Netflix?</button>
                    <div className="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>


                    </div>
                    
                </div>
            </div>  
        </section>

        

        
        </>
        
    )
}


export default Home
