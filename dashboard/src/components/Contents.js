import React, {Component} from 'react';
import userProfile from '../utils/userProfile.jpg';

class Contents extends Component{
  state = {
    groups: [{
      name: 'Agile',
      desription: 'We are here to learn',
      activeMembers: 20
    },
    {
      name: 'Javascript',
      desription: 'Teaching Javascript',
      activeMembers: 100
    },
    {
      name: 'PHP',
      desription: 'Code till you are tired',
      activeMembers: 30
    },
    {
      name: 'Java',
      desription: 'Best programming language so far',
      activeMembers: 29
    },
    {
      name: 'GoLang',
      desription: 'Stil learning the core',
      activeMembers: 14
    }
  ]
  }
  render(){

    return(<div className="contentArea">
      <div className="nav">
        <ul>
          <li><a href="#" className="active">All</a> </li>
          <li><a href="#">Add Group</a> </li>
        </ul>
      </div>
       <div className="groupChats">
        {this.state.groups.map((group, id)=>{
               return(
                <div className="groupOne" key={id}>
                   <div className="groupDetails">
                    <div className="groupImage">
                      <img src={userProfile} alt="User profile" />
                    </div>
                    <div className="groupName">
                      <h4>{group.name}</h4> 
                      <h5 className="domantColor">{group.desription}</h5>
                    </div>
                  </div>
                  <div className="noOfParticipant">
                    <h4 className="domantColor">Active Members</h4>
                    <h5>{group.activeMembers}</h5>
                </div>
                <hr/>
             </div>)
             })}
         </div>
       </div>
    
)}
}
export default Contents;