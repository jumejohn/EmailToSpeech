import { combineReducers } from "redux";
import refreshEmailReducer from "./EmailsReducer";

const rootReducer = combineReducers({
  emailState: refreshEmailReducer,
});

export default rootReducer;
