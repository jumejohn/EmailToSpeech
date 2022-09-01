export const FETCH_SPEECH = "FETCH_SPEECH";

export function fetchSpeech(text) {
  return {
    type: FETCH_SPEECH,
    payload: text,
  };
}
