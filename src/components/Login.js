import React from 'react'
import {GoogleLogin} from 'react-google-login'
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

const Login = () => {
  const onSuccess = (res) => {
    console.log(res.profileObj)
  }

  const onFailure = (res) => {
    console.log(`login failed ${res}`)
  }
  return (
    <div id='signInButton'>
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true} />
    </div>
  )
}

export default Login