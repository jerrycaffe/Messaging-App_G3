import React, {Component} from 'react';
import userProfile from '../utils/userProfile.jpg';
import ToggleSidebar from './ToggleSidebar';


class Header extends Component{
  render(){
    return ( 
      <div className="header">
      <div className="title"> 
       <div className="logo">
         {/* This is the left side hand bugger for extra opptions */}
          <ToggleSidebar 
          isToggled={this.props.isToggled} 
          handleToggle={this.props.handleToggle}
          />
        {/* The logo name */}
        G3 Messenger
      </div>
      {/* This for small screen view at the top of the application when the screen is lower than 620px 
      skip if you are not working on the responsiveness yet
      */}
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
      {/* The user profile details for the small screen ends here */}
    </div>
      {/* below the header in the desktop view and the search box in the mobile view */}
    <div className="searchArea">
      {/* this search box only displays for the mobile view alone if you are not working on responsiveness you can skip this */}
      <form action="">
        <input type="text"  placeholder="Search a Group" />
      </form>
      {/* mobile search ends here */}

      <div className="settings">
        {/* contains tabs where users can select to configure their application */}
        <ul>
          {/* Button Tool bar is from react bootstrap component is used to pop the modal box once the add group button is clicked*/}
          <button 
            className="btn btn-primary"
            onClick={this.props.showHideModal}>
            Add Group
          </button>
          
            {/* <AddGroup 
              show={this.props.toggleModal}
              onHide={this.props.showHideModal}
              selectImage={this.props.selectImage}
              handleSelectImage={this.props.handleSelectImage}
              handleSubmit={this.props.handleSubmit}
            /> */}
           
          
        </ul>
        
      </div>
    </div>
  </div> );
  }
}

 
export default Header;