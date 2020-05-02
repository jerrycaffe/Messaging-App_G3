import React, {Component} from 'react';
import MobileNav from './MobileNav';
import userProfile from '../utils/userProfile.jpg';
import CreatedGroups from './CreatedGroups';
import Modal from './Modal';


class Contents extends Component{
  
   render(){
    const {toggleModal, showHideModal, selectImage, handleSelectImage, handleChange, groupName, handleSubmit, groups} = this.props;
    return(<div className="contentArea">
              <MobileNav 
                 toggleModal={toggleModal}
                 showHideModal={showHideModal}
                 selectImage={selectImage}
                 handleSelectImage={handleSelectImage}
                 handleChange={handleChange}
                 groupName={groupName}
                 handleSubmit={handleSubmit}
              />

              <div>
              <Modal 
                toggleModal={toggleModal}
                showHideModal={showHideModal}
                selectImage={selectImage}
                handleSelectImage={handleSelectImage}
                handleChange={handleChange}
                groupName={groupName}
                handleSubmit={handleSubmit}
                />
              </div>

              <CreatedGroups 
                groups= {groups}
              />
       </div>
    )}
}

export default Contents;