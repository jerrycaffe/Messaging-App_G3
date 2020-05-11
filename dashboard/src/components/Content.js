import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatSquare from './ChatSquare';
import {fetchGroups} from '../reduxFiles/actions';
import {handleContentToggle} from '../reduxFiles/actions';
import GroupList from './GroupList';
import Modal from './Modal';

class Content extends Component{

  // componentDidMount = () => {
  //   this.props.fetchGroups()
  // }

  // componentDidUpdate = () => {
  //   console.log('new group added')
  //   if(this.props.newGroup) {
  //     this.props.reduxStateAsProp.groups.unshift(this.props.newGroup)
  //   }
  // }


  render(){
    return(
      <div className='main_section'>
        <GroupList />
        <Modal />
        <ChatSquare />
    </div>
  )}
}

const mapStateToProps = (state) => { 
  return { 
    reduxStateAsProp: state,
    newGroup: state.group
  }
}

const mapDispatchToProps = {fetchGroups, handleContentToggle}

export default connect(mapStateToProps , mapDispatchToProps)(Content);
