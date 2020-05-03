import React, {Component} from 'react';
import MobileNav from './MobileNav';
import CreatedGroups from './CreatedGroups';
import Modal from './Modal';


class Contents extends Component{  
   render(){
    return(<div className="contentArea">
               <MobileNav/>
               <div>
                  <Modal/>
               </div>
               <CreatedGroups/>
            </div>
            )}
   }

export default Contents;