import React from 'react';

const Modal =(props)=>{
  return (<div>
    {/* The create group form is hidden by default and the Addgroup trigger the state to display
    Addgroup button is found on the Header component
    */}
  <div className={(props.toggleModal)? "showModal": "hideModal"}>
  <div className="popup">
  <form onSubmit={props.handleSubmit} action="post">
    <div className="form-title">
      <h1>Create A Group</h1>
    </div>
    <div className="form-group">
      <label>
       <h4>Group Name: </h4> 
      </label>
      <input 
        className="form-control" 
        type="text"
        onChange={props.handleChange}
        value={props.groupName}
        name="groupName"
        placeholder="input a name for the group"
      />
    </div>
    <div className="form-group">
      <label>
        <h4>Group Description: </h4> 
      </label>
      <input 
        className="form-control" 
        type="text"
        onChange={props.handleChange}
        value={props.groupName}
        name="groupDescription"
        placeholder="Describe the reason for creating the group"
      />
    </div>
      <div className="form-group">
      <label>
       <h4>Select Group Icon: </h4> 
      </label>
      <div className="imaging">
        {
          (props.selectImage !==null)? 
          <img src={props.selectImage} 
          alt="" 
          />: ""
        }
      </div>
      <input 
        className="form-control" 
        type="file"
        onChange={props.handleSelectImage}
        placeholder="Select an Image for the group"
      />
      </div>
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary">
          Create Group
        </button>
        <button
          className="btn btn-danger offset-2"
          onClick={props.showHideModal}>
          Cancel
        </button>
      </div>
    </form>
  {/* Below is the close button to the right of the form */}
	<h2 className="close" onClick={props.showHideModal}>&times;</h2>
	{/* End of the form */}
</div>
</div>
</div>)
}
export default Modal;