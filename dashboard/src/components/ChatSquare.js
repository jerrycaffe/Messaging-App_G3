import React, { Component } from 'react';
import userProfile from '../utils/userProfile.jpg';

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
        let hour = today.getHours();
        let minute = today.getMinutes();
       const newChat = (<li className="left clearfix">
                            <span className="chat-img1 pull-left">
                                <img src={userProfile} alt="User Avatar" className="img-circle"/>
                            </span>
                            <div className="chat-body1 clearfix">
                                <p> { this.state.chats } </p>
                                <div className="chat_time pull-right">{hour}:{minute}</div>
                            </div>
                        </li> )
        console.log(hour)
        this.setState({ 
            postChats : [this.state.chats], 
            chats: '',
            chatLog : [...this.state.chatLog, newChat]
        })
    }

    render() {
        return (
            <div className={ !this.props.contentToggle? "main_section" : 'displayNone'}>
                <div className=".container-fluid" style={{margin: '0 10px', border:'none'}}>
                    <div className="chat_container">
                        <div className="col-sm-3 chat_sidebar">
                            <div className="row">
                                                {/* <!--chat_sidebar--> */}
                                <div id="custom-search-input">
                                    <div className="input-group col-md-12">
                                        <input type="text" className="  search-query form-control" placeholder="Conversation" />
                                        <button className="btn btn-danger" type="button">
                                            <span className=" glyphicon glyphicon-search"></span>
                                        </button>
                                    </div>
                                </div>
                                <div className="dropdown all_conversation">
                                    <button className="dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa fa-weixin" aria-hidden="true"></i>
                                        New messages
                                        <span className="caret pull-right"></span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <li><a href="#"> New messages </a>  
                                            <ul className="sub_menu_ list-unstyled">
                                                <li><a href="#"> All Conversation </a> </li>
                                                <li><a href="#">Another action</a></li>
                                                <li><a href="#">Something else here</a></li>
                                                <li><a href="#">Separated link</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Another action</a></li>
                                        <li><a href="#">Something else here</a></li>
                                        <li><a href="#">Separated link</a></li>
                                    </ul>
                                </div>
                                <div className="member_list">
                                    <ul className="list-unstyled">
                                        <li className="left clearfix">
                                            <span className="chat-img pull-left">
                                                <img src={userProfile} alt="User Avatar" className="img-circle"/>
                                            </span>
                                            <div className="chat-body clearfix">
                                                <div className="header_sec">
                                                    <strong className="primary-font">John Doe</strong> <strong className="pull-right">
                                                        09:45AM</strong>
                                                </div>
                                                <div className="contact_sec">
                                                    <strong className="primary-font">(+234) 111 222 3334</strong> <span className="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="left clearfix">
                                            <span className="chat-img pull-left">
                                                <img src={userProfile} alt="User Avatar" className="img-circle"/>
                                            </span>
                                            <div className="chat-body clearfix">
                                                <div className="header_sec">
                                                    <strong className="primary-font">John Doe</strong> <strong className="pull-right ">
                                                        09:45AM</strong>
                                                </div>
                                                <div className="contact_sec">
                                                    <strong className="primary-font">(+234) 111 222 3334</strong> <span className="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="left clearfix">
                                            <span className="chat-img pull-left">
                                                <img src={userProfile} alt="User Avatar" className="img-circle"/>
                                            </span>
                                            <div className="chat-body clearfix">
                                                <div className="header_sec">
                                                    <strong className="primary-font">John Doe</strong> 
                                                    <strong className="pull-right">09:45AM</strong>
                                                </div>
                                                <div className="contact_sec">
                                                    <strong className="primary-font">(+234) 111 222 3334</strong> <span className="badge pull-right">3</span>
                                                </div>
                                            </div>
                                        </li>      
                                    </ul>
                                </div>
                            </div>
                        </div>
                                                {/* <!--new_message_header--> */}                
                        <div className="col-sm-9 message_section">
                            <div className="row">
                                <div className="new_message_head">
                                    <div className="pull-left"><button onClick={this.props.handleContentToggle} ><i className="fas fa-arrow-left"></i> Go back</button></div><div className="pull-right"><div className="dropdown">
                                        <button className="dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fa fa-cogs" aria-hidden="true"></i>  Setting
                                            <span className="caret"></span>
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                                            <li><a href="#">Add member</a></li>
                                            <li><a href="#">Group members</a></li>
                                            <li><a href="#">Logout</a></li>
                                        </ul>
                                    </div>
                                </div>
                                                    {/* <!--chat_area--> */}                            

                                <div className="chat_area">
                                    <ul className="list-unstyled">
                                        <li className="left clearfix">
                                            <span className="chat-img1 pull-left">
                                                <img src={userProfile} alt="User Avatar" className="img-circle"/>
                                            </span>
                                            <div className="chat-body1 clearfix">
                                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia.</p>
                                                <div className="chat_time pull-right">09:40PM</div>
                                            </div>
                                        </li>
                                        {/* <li className="left clearfix">
                                            <span className="chat-img1 pull-left">
                                                <img src={userProfile} alt="User Avatar" className="img-circle"/>
                                            </span>
                                            <div className="chat-body1 clearfix">
                                                <p> { this.props.currGroupMsgs.concat(this.state.postChats) } </p>
                                                <div className="chat_time pull-right">{this.state.hour}:{this.state.minuute}</div>
                                            </div>
                                        </li>     */}
                                        {this.state.chatLog}
                                    </ul>
                                </div>
                                     {/* <!--text-box_section--> */}
                                <form className="message_write" onSubmit = {this.onSubmit}>
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
                                </form>
                            </div>
                        </div>
          
                    </div>
                </div>
            </div></div>
        )
    }
}

export default ChatSquare
