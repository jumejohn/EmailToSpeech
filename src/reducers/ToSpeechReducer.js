import { FETCH_SPEECH } from "../actions";

const textSpeechReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SPEECH:
      const data = action.payload;

      return [data];

    default:
      return state;
  }
};

export default textSpeechReducer;
