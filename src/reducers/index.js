import { combineReducers } from "redux";
import textSpeechReducer from "./ToSpeechReducer";
import refreshEmailReducer from "./EmailsReducer";

const rootReducer = combineReducers({
  speech: textSpeechReducer,
  emailState: refreshEmailReducer,
});

export default rootReducer;
