import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Content from './Content';
import axios from 'axios'

class App extends Component {
  constructor(props){
  super(props);
    this.state = {
      sidebarToggle: false,
      contentToggle: true,
      currGroupMsgs: [''],
      hour: '',
      minute: ''
    }
  }

  handleSidebarToggle = () => {
    this.setState({sidebarToggle: !this.state.sidebarToggle})
  }

  handleContentToggle = (id) => {
      const today = new Date();
      const hour = today.getHours();
      const minute = today.getMinutes();
      console.log(id);
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => { console.log(res.data)
      this.setState({
        contentToggle : !this.state.contentToggle,
        currGroupMsgs : res.data.body,
        hour: hour,
        minute: minute
      })
    })
  }

  handleBackToGroupList = () => {
    this.setState({
      contentToggle: !this.state.contentToggle,
    })
  }

  render(){
    return (
      <div className="body">
        <Sidebar
          sidebarToggle={this.state.sidebarToggle}
          handleSidebarToggle={this.handleSidebarToggle}
        />
        <div className="bodyWrapper">
          <Header
            sidebarToggle={this.state.sidebarToggle}
            handleSidebarToggle={this.handleSidebarToggle}
          />
          <Content 
          contentToggle={this.state.contentToggle} 
          handleContentToggle={this.handleContentToggle}
          handleGroupMessages = {this.handleGroupMessages}
          currGroupMsgs = {this.state.currGroupMsgs}
          handleBackToGroupList = {this.handleBackToGroupList}
          />

        </div>
      </div>
    );
  }
}

export default App;
