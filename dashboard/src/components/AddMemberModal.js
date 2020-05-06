import React, {Component} from 'react';
import axios from 'axios';

class AddMemberModal extends Component {
    state = {
        persons: [
            {
                name: 'Alao',
                email: 'alao@example.com',
                id: 11
            }
        ]
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( res => {
            console.log(res.data, 'cdm');
            this.setState({
                persons: res.data.concat(this.state.persons)
            })
        })
    }

    render() {
        const potentialMember = this.state.persons.map(person => {
            const {id, name, email} = person;
            console.log(name)
            return (
                <li key={person.id}>
                    <div className="d-flex justify-content-between bd-highlight">
                        <div className="d-flex justify-content-start">
                            <div className="img_cont" style={{marginRight:'15px'}}>
                                <img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg" className="rounded-circle user_img" />
                            </div>
                            <div className="new_member_info">
                                <span><strong> {name} </strong></span>
                                <p>{email}</p>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn btn-success" onClick={this.props.handleAddNewMember.bind(this, id, name, email)}>Add</button>
                        </div>
                    </div>
                </li>
            );
        })

        return(
            <div>

                <div className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="#staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="#staticBackdropLabel">Add Some Members to Your Group</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="contacts"> 
                                    {potentialMember}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddMemberModal;