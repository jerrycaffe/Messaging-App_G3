export const SELECTIMAGE = "SELECTIMAGE";
export const SHOWMODAL = "SHOWMODAL";
export const HANDLETOGGLE = "HANDLETOGGLE";
export const HANDLECHANGE = "HANDLECHANGE";
export const HANDLESUBMIT = "HANDLESUBMIT"

export function selectImage(payload){
    return {
    type: SELECTIMAGE,
    payload
  }
}

export function showModal(){
  return{
    type: SHOWMODAL
  }
}

export function handleToggle(){
  return {
    type: HANDLETOGGLE
  }
}

export function handleChange(payload){
  
  return{
    type: HANDLECHANGE,
    payload
  }
}

export function handleSubmit(payload){
  return {
    type: HANDLESUBMIT,
    payload
  }
}