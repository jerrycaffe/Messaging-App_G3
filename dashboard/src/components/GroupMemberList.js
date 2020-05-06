import React, { Component } from 'react'

export default class GroupMemberList extends Component {
   
     render() {
        
         let members = 
            this.props && this.props.memberList.length > 0 ?
             this.props.memberList.map( member => {
             return member
         }): <span></span>
        return(
            <div>
                <div className="modal fade" id="groupList" tabIndex="-1" role="dialog" aria-labelledby="#groupList" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="#groupList">Group Member List </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <ul className="contacts"> 
                                    {members}
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
