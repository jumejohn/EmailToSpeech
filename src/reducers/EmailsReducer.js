import { REFRESH_EMAIL } from "../actions";

const refreshEmailReducer = (state = [], action) => {
  switch (action.type){
    case REFRESH_EMAIL:
      const data = action.payload
      console.log('email reducer ', action.payload)
      return [data, ...state]

    default:
      return state
  }
}

export default refreshEmailReducer
