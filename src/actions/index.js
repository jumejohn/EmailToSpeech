export const REFRESH_EMAIL = "REFRESH_EMAIL";
export const RESET_EMAIL_STATE = "RESET_EMAIL_STATE"
export const SET_USER = "SET_USER"
export const UNSET_USER = "UNSET_USER"

export function refreshEmail(obj) {
  return {
    type: REFRESH_EMAIL,
    payload: obj,
  };
}

export function resetEmailState(){
  return {
    type: RESET_EMAIL_STATE,
    payload: null
  }
}

export function setUser(obj){
  return{
    type: SET_USER,
    payload: obj
  }
}

export function unsetUser(){
  return{
    type: UNSET_USER,
    payload: null
  }
}