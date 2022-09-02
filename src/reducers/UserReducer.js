import { SET_USER, UNSET_USER } from "../actions"

const userReducer = (state = [{name:'', imageUrl:''}], action)=>{
  switch (action.type){
    case SET_USER:
      const data = action.payload
      return [data]
    case UNSET_USER:
      const noUser = [{name:'', imageUrl:''}]
      return [noUser]
    default:
      return state
  }
}

export default userReducer