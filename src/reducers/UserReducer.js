import { SET_USER, UNSET_USER } from "../actions"

const userReducer = (state = [], action)=>{
  switch (action.type){
    case SET_USER:
      const data = action.payload
      return [data]
    case UNSET_USER:
      const emptyState = []
      return [emptyState]
    default:
      return state
  }
}

export default userReducer