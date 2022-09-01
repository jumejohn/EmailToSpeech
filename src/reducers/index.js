import { combineReducers } from "redux";
import textSpeechReducer from "./ToSpeechReducer";
import refreshEmailReducer from "./EmailsReducer";

const rootReducer = combineReducers({
  textSpeechState: textSpeechReducer,
  emailState: refreshEmailReducer
});

export default rootReducer;
