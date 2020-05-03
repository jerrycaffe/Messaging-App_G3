import React from 'react';
import {connect} from 'react-redux';

const CreatedGroups=(props)=>{
  const {groups} = props.reduxStateAsProp
  if(groups.length===0){
    return (<div className="groupChats">
                <div className="groupOne">
                  <h3>
                    You currently do not have any Group
                  </h3>
                </div>
            </div>)
        } 
    return (
    <div className="groupChats">
      {groups.map((group, id)=>{
        return(
          <div className="groupOne" key={id}>
            <div className="groupDetails">
              <div className="groupImage">
                <img src={group.imageUrl} alt={group.imageUrl} />
              </div>
              <div className="groupName">
                <h4>{group.name}</h4> 
                <h5 className="domantColor">
                  {group.description}
                </h5>
              </div>
          </div>
          <div className="noOfParticipant">
            <h4 className="domantColor">Active Members</h4>
            <h5>{group.activeMembers}</h5>
          </div>
        </div>)
      })}
    </div>)
  }

  const mapStateToProps = (state)=>{ return {reduxStateAsProp: state

  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps , mapDispatchToProps)(CreatedGroups);