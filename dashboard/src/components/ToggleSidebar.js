import React from 'react';

const ToggleSidebar= props=>{
 return  (<div 
    className={(props.isToggled)?'displayNone': 'menu'} 
    onClick={props.handleToggle}>
    <i className="fas fa-bars"></i>
  </div>)
}
export default ToggleSidebar;