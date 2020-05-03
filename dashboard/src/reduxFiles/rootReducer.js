import {SELECTIMAGE, SHOWMODAL, HANDLETOGGLE, HANDLECHANGE, HANDLESUBMIT} from './actions';

const initialState = {
  groupName: '',
  groupDescription: '',
  selectImage: null,
  isToggled: false,
  toggleModal: false,
  groups: []}

function rootReducer(state=initialState, action){
  
   switch(action.type){
     case SHOWMODAL:
      return{
        ...state,
        toggleModal: !state.toggleModal}
      case SELECTIMAGE:
        return{
          ...state,
          selectImage: action.payload
        }
      case HANDLETOGGLE:
        return{
          ...state,
          isToggled: !state.isToggled
        }
      case HANDLECHANGE:
          {let name = action.payload.name;
          let value = action.payload.value;
        return{
          ...state,
          [name]: value
        }}
      case HANDLESUBMIT:
       {const name = action.payload.groupName.value;
        const description = action.payload.groupDescription.value;
        const imageUrl = state.selectImage;
        
        const newGroup = {name, description, activeMembers: 10, imageUrl}
         return {
            ...state,
            toggleModal: !state.toggleModal,
            groups: [newGroup, ...state.groups]
           }
         }
      default:
     return state}
}

export default rootReducer;