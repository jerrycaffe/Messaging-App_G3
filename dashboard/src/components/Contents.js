import React, {Component} from 'react';
import MobileNav from './MobileNav';
import userProfile from '../utils/userProfile.jpg';
import CreatedGroups from './CreatedGroups';
import Modal from './Modal';


class Contents extends Component{
   render(){
    return(<div className="contentArea">
              <MobileNav 
                 toggleModal={this.props.toggleModal}
                 showHideModal={this.props.showHideModal}
                 selectImage={this.props.selectImage}
                 handleSelectImage={this.props.handleSelectImage}
                 handleChange={this.props.handleChange}
                 groupName={this.props.groupName}
                 handleSubmit={this.props.handleSubmit}
              />

              <div>
              <Modal 
                toggleModal={this.props.toggleModal}
                showHideModal={this.props.showHideModal}
                selectImage={this.props.selectImage}
                handleSelectImage={this.props.handleSelectImage}
                handleChange={this.props.handleChange}
                groupName={this.props.groupName}
                handleSubmit={this.props.handleSubmit}
                />
              </div>

              <CreatedGroups 
                groups= {this.props.groups}
              />
       </div>
    )}
}

export default Contents;