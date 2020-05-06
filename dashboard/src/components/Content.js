import React, {Component} from 'react';
import userProfile from '../utils/userProfile.jpg';
import {Link} from 'react-router-dom';
import ChatSquare from './ChatSquare'
import axios from 'axios'

class Content extends Component{
  state = {
    groups: [
      {
        title: 5,
        id: 8
    },
      {title: 2, 
        id : 9
    }
    ]
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7').then(res =>{
    this.setState({
      groups: res.data.concat(this.state.groups)
      })}
    )
  }

  render(){
    const groups = this.state.groups.map((group) => { 
      const id = group.id;
      return (
        <div className="group" key={group.id} onClick={this.props.handleContentToggle.bind(this, id)}>
          <div className="groupDetails">
            <div className="groupImage">
              <img src={userProfile} alt="User profile" />
            </div>
            <div className="groupName">
              <h4>{group.id}</h4>
              <h5 className="domantColor"> {group.title}</h5>
            </div>
          </div>
          <div className="noOfParticipant">
            <h4 className="domantColor">Active Members</h4>
            <h5>{50}</h5>
          </div>
          <hr />
        </div>
        )
    })
    return(
      <div>
        <div className={this.props.contentToggle ? "contentArea" : "displayNone"}>
            <div className="groupChats">
              {groups}
            </div>
        </div>
        <ChatSquare 
        contentToggle={this.props.contentToggle} 
        handleContentToggle={this.props.handleContentToggle}
        handleGroupMessages = {this.props.handleGroupMessages} 
        currGroupMsgs = {this.props.currGroupMsgs}
        handleBackToGroupList = {this.props.handleBackToGroupList}
        handleAddNewMember={this.handleAddNewMember}
        />
    </div>
  )}
}
export default Content;
