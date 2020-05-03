import React, {Component} from 'react';
import axios from 'axios';
import userProfile from '../utils/userProfile.jpg';

class AddMemberModal extends Component {
    state = {
        name: '',
        department: ''
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            console.log(res.data);
            this.setState({
                name: res.data.name,
                // department: res.data.company.bs
            })
        })
    }
    render() {
        const potentialUser = (
            <li className="left clearfix">
                <span className="chat-img pull-left">
                    <img src={userProfile} alt="User Avatar" className="img-circle"/>
                </span>
                <div className="chat-body clearfix">
                    <div className="header_sec">
                        <strong className="primary-font">{this.state.name}</strong> 
                    </div>
                    <div className="contact_sec">
                        <strong className="primary-font"> {this.state.department} </strong> 
                        <span className="badge pull-right"><button type="button" className="btn btn-primary">Add</button></span>
                    </div>
                </div>
            </li>
        )
        return(
            <div>
                {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Add group
                </button> */}

                <div className="modal fade" id="exampleModal" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {potentialUser}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddMemberModal;