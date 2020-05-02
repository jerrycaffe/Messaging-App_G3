import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Contents from './Contents';
import axios from 'axios'


class App extends Component {
  state = {
    groupName: '',
    groupDescription: '',
    selectImage: null,
    isToggled: false,
    toggleModal: false,
    groups: []}

  componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      

      console.log(response.data)
    })
  }

  handleSelectImage=(event)=>{
    this.setState({selectImage: URL.createObjectURL(event.target.files[0])})
  }

  handleToggle =()=>{
    this.setState({...this.state,
      isToggled: !this.state.isToggled})
   }
   showHideModal=(event)=>{
     this.setState({...this.state,
      toggleModal: !this.state.toggleModal})
     event.preventDefault();
   }

   handleChange=(event)=>{
     let name = event.target.name;
     let value = event.target.value
     this.setState({[name]: value})
   }

   handleSubmit=(event)=>{
     event.preventDefault();
    const name =event.target.groupName.value;
    const description = event.target.groupDescription.value;
    const imageUrl = this.state.selectImage;
    const newGroup = {name, description, activeMembers: 10, imageUrl}
    
    this.setState({...this.state,
      toggleModal: !this.state.toggleModal,
      groups: [newGroup, ...this.state.groups]})
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
        showHideModal={this.showHideModal}
        toggleModal={this.state.toggleModal}
        handleSubmit={this.handleSubmit}
      />
    
      <Contents groups={this.state.groups}
        handleToggle={this.handleToggle}
        showHideModal={this.showHideModal}
        toggleModal={this.state.toggleModal}
        selectImage={this.state.selectImage}
        handleSelectImage={this.handleSelectImage}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        
      />
    
  </div>
</div>);
}
}

export default App;
