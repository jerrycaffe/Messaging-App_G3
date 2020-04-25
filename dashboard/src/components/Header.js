import React, {Component} from 'react';
import userProfile from '../utils/userProfile.jpg';

const Header = (props)=>{
  
    return ( 
    <div className="header">
      <div className="title"> 
       <div className="logo">
          <div 
          className={(props.isToggled)?'displayNone': 'menu'} 
          onClick={props.handleToggle}>
          <i className="fas fa-bars"></i>
          </div>
          
        G3 Messenger
      </div>
      {/* This pops up during responsiveness when the screen is lower than 620px */}
      <div className="user">
        <div className="userProfile">
          <div className="userImage">
            <img src={userProfile} alt="User Profile" />
          </div>
          <div className="userDetails">
            <h3>Jerrycaffe</h3>
            <h4 className="domantColor">Active Now</h4>
          </div>
        </div>
        {/* The class below is responsible for the three dots in mobile view */}
        <div className="mobileMenu">
          <i className="fas fa-ellipsis-v"></i></div>
      </div>
      {/* The user profile details end here */}
      
    </div>
    <div className="searchArea">
      <form action="">
        <input type="text"  placeholder="Search a Group" />
      </form>
      <div className="settings">
        <ul>
          <li><a href="#">AddGroup</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Supports</a></li>
        </ul>
      </div>
    </div>
  </div> );
  }

 
export default Header;