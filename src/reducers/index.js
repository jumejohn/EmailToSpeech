import { combineReducers } from "redux";
import textSpeechReducer from "./ToSpeechReducer";
import refreshEmailReducer from "./EmailsReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  speech: textSpeechReducer,
  emailState: refreshEmailReducer,
  userState: userReducer
});

export default rootReducer;
