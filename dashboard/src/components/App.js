import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Contents from './Contents'

class App extends Component {
  state = {
    isToggled: false
  }
  handleToggle =()=>{
    this.setState({isToggled: !this.state.isToggled})
   }
  render(){
    return (
      <div className="body">
        <Sidebar 
          isToggled={this.state.isToggled} 
          handleToggle={this.handleToggle}
        />
  <div className="bodyWrapper">
    <Header 
      isToggled={this.state.isToggled} 
      handleToggle={this.handleToggle}
    />
    <Contents />
    
  </div>
</div>
  );
}
}

export default App;
