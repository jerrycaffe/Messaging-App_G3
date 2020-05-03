import React, { Component } from 'react';
import userProfile from '../utils/userProfile.jpg';
import {connect} from 'react-redux';
import {handleToggle} from '../reduxFiles/actions'


class Sidebar extends Component{
   render(){

    return(
      <div 
        className={(this.props.reduxStateAsProp.isToggled)? 
          'sideMenu': 'displayNone'}>
          <div onClick=  {()=>{this.props.handleToggle()}}>
            <i className="fas fa-arrow-left"></i>
          </div>
          <div className="message">
              <i className="far fa-envelope-open"></i>     
          </div>
        <div className="userIcon">
          <i className="far fa-user"></i>
        </div>
        <div className="notification">
            <i className="far fa-bell"></i>
        </div>
        <div className="groupImage">
          <div className="toggleOnline">
            <i className="fas fa-toggle-on"></i>
          </div>
            
            <img src={userProfile} alt="user profile" />
        </div>
          
      </div>)
    }
  }
  const mapStateToProps = (state)=>{ return {reduxStateAsProp: state

  }
  }
  
  const mapDispatchToProps = {handleToggle}
  
  export default connect(mapStateToProps , mapDispatchToProps)(Sidebar);