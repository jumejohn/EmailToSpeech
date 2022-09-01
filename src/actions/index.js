export const FETCH_SPEECH = "FETCH_SPEECH";
export const REFRESH_EMAIL = "REFRESH_EMAIL";

export function fetchSpeech(text) {
  const str1 = text.replaceAll("[\r\n]+", " ");
  return {
    type: FETCH_SPEECH,
    payload: str1,
  };
}

export function refreshEmail(obj) {
  return {
    type: REFRESH_EMAIL,
    payload: obj,
  };
}
