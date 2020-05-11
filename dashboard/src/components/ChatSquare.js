import React, { Component } from 'react';
import userProfile from '../utils/userProfile.jpg';
import AddMemberModal from './AddMemberModal';
import SideNewGroupMsg from './SideNewGroupMsg';
import MessageSection from './MessageSection'
import { connect } from 'react-redux';
import {handleContentToggle} from '../reduxFiles/actions'

class ChatSquare extends Component {
    render() {
        return (
            // <div className={ !this.props.handleContentToggle? "main_section" : 'displayNone'}>
                <div className={!this.props.reduxStateAsProp.contentToggle ? ".container-fluid" : 'displayNone'}>
                    <div className="row justify-content-center h-100">
                                                {/* <!--Chat sidebar--> */}
                        <SideNewGroupMsg />
                                                {/* <!--Group message area--> */}                
                        
                        <MessageSection
                        />
                    </div>
                </div>
            // </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
      reduxStateAsProp: state 
    }
  }

export default connect(mapStateToProps, handleContentToggle) (ChatSquare)
