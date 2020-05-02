import React from 'react';

const CreatedGroups=({groups})=>{
  if(groups.length===0){
    return (<h1>You currently do not have any Group</h1>)
  } return (
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
          <hr/>
        </div>)
      })}
    </div>)
  }

export default CreatedGroups;