import React from 'react'
import {GoogleLogout} from 'react-google-login'
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID
import { resetEmailState } from "../actions";
import { useDispatch } from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch()
  const onSuccess = () => {
    dispatch(resetEmailState())
    console.log('logout successful')
  }
  return (
    <div id='signOutButton'>
      <GoogleLogout
        clientId={CLIENT_ID}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess} />
    </div>
  )
}

export default Logout