import React from 'react';
import './landing.css';
import {Link} from 'react-router-dom';
    
    const Landing = ()=> (
    <header className="showcase">
        <div className="showcase-top">
            <h1 className="logo"> <span style={{color:"#033292"}}>G3</span> <span>MESSENGER</span> </h1>
            <Link to ="/signIn" className ="btn">Sign In</Link>
        </div>
        <div className = "showcase-content">
            <h1>Be in touch with your team.<br></br> Anytime, anywhere.</h1>
            <p>Don't have an account? Click the button below to sign up.</p>
            <Link to="/signUp" className="btn btn-xl">Sign up now</Link>
        </div>
    </header>
)
export default Landing;