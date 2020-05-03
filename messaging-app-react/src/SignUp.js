import React from 'react';
import {Link} from 'react-router-dom';
import './signUp.css';

const  SignUp = ()=> (
        <div className="container">
            <h1 className="logo"> <span style={{color:"#033292"}}>G3</span> <span>MESSENGER</span> </h1>
            <div className="wrapper">
                <div className="formWrapper">
                    <h1 style= {{color:"#033292"}} className="header">Create an account</h1>
                    <form>
                            <input type="text" name="firstName" placeholder="First Name" required id="firstname"></input>
                            <input type = "text" name = "lastName" placeholder="Last Name" required id="lastname"></input><br></br>
                           
                            <input type = "text" name = "username" placeholder= "Mobile number or email address" required></input><br></br>
                            <input type="password" placeholder="New password" value="" required></input><br></br>
                            <input type="password" placeholder="Confirm password" value="" required></input><br></br>
                            <div ><span className ="birthday">Birthday</span></div>
                            <input type= "date" required></input>
                            <div className ="gender" style={{color:"black"}}> Gender
                            <input type= "radio" name = "sex" value="1" style={{width:"10%"}}></input>Male
                            <input type = "radio" name = "sex" value = "1" style={{width:"8%"}}></input>Female
                            </div>
                            <div class= "button">
                                <button type="submit">Sign up</button>
                            </div>
                            </form>
                        <p>Already have an account? <Link to="/signIn" style={{color:"blue"}}>Sign In</Link></p>
                </div>
            </div>
        </div>
    )
    export default SignUp;