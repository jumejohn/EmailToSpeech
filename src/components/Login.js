import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../actions";
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Login = () => {
  const userObject = useSelector((state) => state.userState)
  const dispatch = useDispatch()
  const onSuccess = (res) => {
    dispatch(setUser(res.profileObj))

  };

  const onFailure = (res) => {
    console.log(`login failed ${res}`);
  };
  return (
    <div>
      <div id="signInButton">
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    </div>
  );
};

export default Login;
