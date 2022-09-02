export const REFRESH_EMAIL = "REFRESH_EMAIL";
export const RESET_EMAIL_STATE = "RESET_EMAIL_STATE"

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
