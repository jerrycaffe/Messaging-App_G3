import React from 'react';
import Modal from './Modal';

const MobileNav = props=>{
  // this component is meant for the add group button for the mobile responsiveness alone if you are not working on the mobile view you have no business here

  return ( <div className="mobileNav">
  <ul>    
      <button className="btn btn-primary"
        onClick={props.showHideModal}>Add Group
      </button>
      <Modal 
         toggleModal={props.toggleModal}
         showHideModal={props.showHideModal}
         selectImage={props.selectImage}
         handleSelectImage={props.handleSelectImage}
         handleChange={props.handleChange}
         groupName={props.groupName}
         handleSubmit={props.handleSubmit}
      />
   
  </ul>
</div>)
}
export default MobileNav;