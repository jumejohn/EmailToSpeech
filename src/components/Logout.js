import React from "react";
import { GoogleLogout } from "react-google-login";
import { resetEmailState, unsetUser } from "../actions";
import { useDispatch } from "react-redux";
const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const Logout = () => {
  const dispatch = useDispatch();
  const onSuccess = () => {
    dispatch(resetEmailState());
    dispatch(unsetUser());
    console.log("logout successful");
  };

  return (
    <div id="signOutButton">
      <GoogleLogout
        button
        type="button"
        className="btn btn-secondary"
        clientId={CLIENT_ID}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};

export default Logout;
