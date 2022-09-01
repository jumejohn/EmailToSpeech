export const FETCH_SPEECH = "FETCH_SPEECH";
export const REFRESH_EMAIL = "REFRESH_EMAIL"

export function fetchSpeech(text) {
  return {
    type: FETCH_SPEECH,
    payload: text,
  };
}

export function refreshEmail(obj){
  return{
    type: REFRESH_EMAIL,
    payload: obj
  }
}