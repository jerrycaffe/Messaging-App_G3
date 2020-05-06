import React, { Component } from 'react';
import userProfile from '../utils/userProfile.jpg';
import AddMemberModal from './AddMemberModal';
import SideNewGroupMsg from './SideNewGroupMsg';
import MessageSection from './MessageSection'

class ChatSquare extends Component {

    state = {
        chats : '',
        chatLog: []
    }

    onChange = (e) => { 
        this.setState({ chats : e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        let today = new Date();
        let day;
        switch (today.getDay()){
            case 0:
                day = 'Sunday';
                break;
            case 1:
                day = 'Monday';
                break;
            case 2:
                day = 'Tuesday';
                break;
            case 3:
                day = 'Wednesday';
                break;
            case 4:
                day = 'Thursday';
                break;
            case 5:
                day = 'Friday';
                break;
            case 6:
                day = 'Saturday';
                break;
        }
        console.log(day)
        let hour = today.getHours();
        let minute = today.getMinutes();
       const newChat = (
           <div className="d-flex justify-content-end mb-4">
               <div className="msg_cotainer_send">
                    { this.state.chats } 
                <div className="msg_time_send" style={{marginLeft:'0px'}}> {hour} {' '}: {' '}{minute}, {day} </div>
               </div>
               <div className="img_cont_msg">
                   <img src="" className="rounded-circle user_img_msg" />
               </div>
           </div>
                         );
        console.log(hour);
        this.setState({ 
            postChats : [this.state.chats], 
            chats: '',
            chatLog : [...this.state.chatLog, newChat]
        })
    }

    render() {
        return (
            <div className={ !this.props.contentToggle? "main_section" : 'displayNone'}>
                <div className=".container-fluid" style={{margin: '10px 0', border:'none'}}>
                    <div className="row justify-content-center h-100">
                                                {/* <!--chat sidebar--> */}
                        <SideNewGroupMsg />
                                                {/* <!--new group message area--> */}                
                        
                        <MessageSection 
                        onChange={this.onChange} 
                        onSubmit={this.onSubmit} 
                        chats={this.state.chats} 
                        chatLog={this.state.chatLog}
                        // handleBackToGroupList = {this.props.handleBackToGroupList}
                        // handleAddNewMember={this.props.handleAddNewMember}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatSquare


{/* <form className="message_write" onSubmit = {this.onSubmit}>
                                    <textarea 
                                    className="form-control" 
                                    placeholder="type a message"
                                    value = {this.state.chats}
                                    onChange = {this.onChange}
                                    />
                                    <div className="clearfix"></div>
                                    <div className="chat_bottom"><a href="#" className="pull-left upload_btn"><i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                        Add Files</a>
                                        <button type='submit' className="pull-right btn btn-success">Send</button>
                                    </div>
                                </form> */}

                                // <div className="pull-left"><button onClick={this.props.handleContentToggle} ><i className="fas fa-arrow-left"></i> Go back</button></div>