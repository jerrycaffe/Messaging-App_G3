import React from 'react';
import {connect} from 'react-redux';
import {handleToggle} from '../reduxFiles/actions'


const ToggleSidebar= props=>{
  return  (<div 
    className={(props.reduxStateAsProp.isToggled)?'displayNone': 'menu'} 
    onClick={()=>{props.handleToggle()}}>
    <i className="fas fa-bars"></i>
  </div>)
}
const mapStateToProps = (state)=>{ return {reduxStateAsProp: state

}
}

const mapDispatchToProps = {handleToggle}


export default connect(mapStateToProps , mapDispatchToProps)(ToggleSidebar);