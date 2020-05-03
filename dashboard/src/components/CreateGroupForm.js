import React, {Component} from 'react';
import {connect} from 'react-redux'
import {handleChange, handleSubmit, selectImage, showModal} from '../reduxFiles/actions'

class CreateGroupForm extends Component{
  
  handleSelectImage=(event)=>{
      let selectedImage = URL.createObjectURL(event.target.files[0])
      this.props.selectImage(selectedImage);
    }
    
    handleInputChange=(event)=>{
      let userInputs = event.target;
      this.props.handleChange(userInputs)
    }

    handleSubmitInputs=(event)=>{
      event.preventDefault();
      
      let userInputs = event.target
      this.props.handleSubmit(userInputs)
    }

    render(){  
      return (
  <form onSubmit={this.handleSubmitInputs} action="post">
    <div className="form-title">
      <h1>Create A Group</h1>
    </div>
    <div className="form-group">
      <label><h4>Group Name: </h4></label>
      <input 
        className="form-control" 
        type="text"
        onChange={this.handleInputChange}
        value={this.props.reduxStateAsProp.groupName}
        name="groupName"
        placeholder="input a name for the group"
        />
    </div>
    <div className="form-group">
      <label><h4>Group Description: </h4></label>
      <input 
        className="form-control" 
        type="text"
        onChange={this.handleInputChange}
        value={this.props.reduxStateAsProp.groupDescription}
        name="groupDescription"
        placeholder="Describe the reason for creating the group"
        />
    </div>
      <div className="form-group">
      <label><h4>Select Group Icon: </h4></label>
      <div className="imaging">
        {
          (this.props.reduxStateAsProp.selectImage !==null)? 
            <img src={this.props.reduxStateAsProp.selectImage} 
            alt="Group icon preview" 
          />: ""
        }
      </div>
      <input 
        className="form-control" 
        type="file"
        onChange={this.handleSelectImage}
        placeholder="Select an Image for the group"
        />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary">Create Group
          </button>
        <button
          type="button"
          className="btn btn-danger offset-2"
          onClick={this.props.showModal}> Cancel
        </button>
      </div>
    </form>
      )}}
const mapStateToProps = (state)=>{ 
  return {reduxStateAsProp: state}
  }

const mapDispatchToProps = {handleChange, selectImage, handleSubmit, showModal}

export default connect(mapStateToProps , mapDispatchToProps)(CreateGroupForm);