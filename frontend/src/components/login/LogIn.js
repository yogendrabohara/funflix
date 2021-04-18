import React from 'react'
import Header from '../header/Header'
import './login.css'
// import styled from 'styled-components'
import apis from '../../redux/apis/apis'
import {storeToken} from '../../redux/actions/index'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'




const SignIn = (props) => {
    
    const history = useHistory()
    const token = localStorage.getItem('token')
    if(token) {
        history.push('/movies')
    }
    
    const handleLogin = (e) => {
        console.log(props)
        e.preventDefault()
        const email= document.getElementById('emailInput').value
        const password= document.getElementById('passwordInput').value
        apis.post('/login',{
            username: email,
            password,
        }).then(response => {props.setToken(response.data.token);
            localStorage.setItem('token', response.data.token)   
            history.push('/movies')})
            .catch(error => console.log(error))
    }
    return (

        <section id="loginpage" className="container-fluid">
            <section className="title">
                <Header/>
            </section>

            <section className="container">
                <div className="jumbotron ">
                    <form >
                        <fieldset>
                            <legend className="legendname">Sign In</legend>
                            <div className="signincontrol">
                                <input type="text" id="emailInput" className="form-control" placeholder="username"/>
                            </div>
                            <div className="signincontrol">
                                <input type="password" id="passwordInput" className="form-control" placeholder="Password"/>
                            </div>
                            <button onClick={handleLogin} type="submit" className="btn btn-danger">Submit</button>
                            <section className="radioselect">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-6" id="radioneedhelp">
                                            <input type="checkbox" id="rememberme" value="Remember me" name="rememberme"/>
                                            <label htmlFor="rememberme" >Remember me</label>
                                        </div>
                                        <div className="col-6" id="radioneedhelp">
                                        <h5 className="needhelp">Need Help?</h5>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </fieldset>
                    </form>
                </div>
            </section>
        </section>  
    )
}


const mapDispatchToProps = dispatch => ({
    setToken: token => dispatch(storeToken(token))
})



export default connect(null, mapDispatchToProps)(SignIn)













// const SectionWrap = styled.div`
//     .jumbotron {
//     background-color: ${props => props.alt ? 'red ': 'green' };
//     opacity: 0.7;
//     width: 40%;
//     }

//     .signincontrol {
//     padding-left: 10px;
//     padding-top: 25px;
//     width: 100%;
//     }

//     #textInput {
//     width: 100%;
//     }

//     button[type="submit"] {
//     margin-top: 10px;
//     margin-left: 5px;
//     /* width: 100%; */
//     }

//     .legendname {
//     font-size: 30px;
//     font-weight: bold;
//     color: #fff;
//     }

//     #radioneedhelp {
//     color: #fff;
//     display: inline-flex;
//     margin-top: 10px;
//     justify-content: space-between;
//     padding-right: 50px;
//     }

//     #loginpage {
//     background-size: cover;
//     height: 100vh;
//     }
// `


