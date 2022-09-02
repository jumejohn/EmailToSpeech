import { combineReducers } from "redux";
import refreshEmailReducer from "./EmailsReducer";
import userReducer from "./UserReducer";

const rootReducer = combineReducers({
  emailState: refreshEmailReducer,
  userState: userReducer
});

export default rootReducer;
