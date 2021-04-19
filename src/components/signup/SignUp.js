import axios from 'axios'
import React from 'react'
import Header from '../header/Header'
import apis from '../../redux/apis/apis'
import {useHistory} from 'react-router-dom'
import './signup.css'

const SignUp = () => {
    const history = useHistory()
    const handleChange = () => {
        // e.preventDefault()
        const username = document.getElementById('usernameInput').value
        const email = document.getElementById('emailInput').value
        const password = document.getElementById('passwordInput').value

        const confirmpassword = document.getElementById('confirmpasswordInput').value
        if(password === confirmpassword){
            const user = {
                username,
                email,
                password
            }
            
            apis.post('/users/', user)
            .then(response=> history.push('/login'))
            
            
        }
        
    }
    
    
    return (
        <section id="signuppage" className="container-fluid">
            <section className="title">
                <Header/>
            </section>
        <div className="container">
            <div className="jumbotron">
                
                    <fieldset>
                        <legend className="legendname">Sign Up</legend>
                        <div className="signincontrol">
                            <input type="text" id="usernameInput" className="form-control" name="username" placeholder="username"/>
                        </div>
                        <div className="signincontrol">
                            <input type="email" id="emailInput" className="form-control" name="email" placeholder="Email"/>
                        </div>
                        <div className="signincontrol">
                            <input type="password" id="passwordInput" className="form-control" name="password" placeholder="Password"/>
                        </div>
                        <div className="signincontrol">
                            <input type="password" id="confirmpasswordInput" className="form-control" name="confirmpassword" placeholder="Confirm Password"/>
                        </div>
                        <button className="btn btn-danger" name="submit" onClick={() => handleChange()}>Submit</button>               
                    </fieldset>
                

            </div>
            

        </div>
        </section>   
    )
}

export default SignUp






// const onChange = (e) => {
//     this.setState({
//         [e.target.name]: e.target.value
//     })
// }
