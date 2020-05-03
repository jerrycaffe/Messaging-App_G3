import React from 'react';
import {Link} from 'react-router-dom';
import './signIn2.css'

const SignIn = () => (
  <div className="box">
    <div class="logo">
      <i class="far fa-comments"></i>
      <h1><span style={{color:"#033292"}}>G3</span> <span>MESSENGER</span></h1>
    </div>
    <div className="signIn">
      <h1 style={{color:"#033292"}}>Sign In </h1>
      <div className="input1">
        <input
          type="Username or e-mail"
          name=""
          placeholder="Username or e-mail "
        required></input>
      </div>
      <div className="input1">
        <input type="Password" name="" placeholder="Password " required></input>
      </div>
      <div className="button">
        <button type="button" name="button">
          Sign in{" "}
        </button>
      </div>
      <div className="text">
        <span>
          Don't have an account? <Link to="/signUp"  style={{color:"blue"}}>Sign up</Link>{" "}
        </span>
      </div>
    </div>
  </div>
);
export default SignIn;