import { REFRESH_EMAIL, RESET_EMAIL_STATE } from "../actions";

const refreshEmailReducer = (state = [], action) => {
  switch (action.type){
    case REFRESH_EMAIL:
      const data = action.payload
      return [data, ...state]
    case RESET_EMAIL_STATE:
      const emptyState = []
      return [emptyState]
    default:
    return state
  }
}

export default refreshEmailReducer
