import Login from "./Login";
import Logout from "./Logout";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import { refreshEmail, resetEmailState } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SCOPES =
  "https://mail.google.com/ https://www.googleapis.com/auth/gmail.labels https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly";

function User() {
  const emailStateObject = useSelector((state) => state.emailState);

  const dispatch = useDispatch();

  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        scope: SCOPES,
      });
    }
    gapi.load("client:auth2", start);
  });

  const getLabelList = () => {
    let accessToken = gapi.auth.getToken().access_token;
    fetch(`https://gmail.googleapis.com/gmail/v1/users/me/labels`, {
      method: "GET",
      headers: new Headers({ Authorization: "Bearer " + accessToken }),
    })
      .then((res) => {
        return res.json();
      })
      .then(function (val) {
        getLabelId(val);
      });
  };

  const getLabelId = (array) => {
    const audioList = array.labels.filter(
      (listIds) => listIds.name === "toAudio"
    );
    const audioListId = audioList.find((el) => el.id);
    getEmailsList(audioListId.id);
  };

  const getEmailsList = (listId) => {
    resetHandler();
    let accessToken = gapi.auth.getToken().access_token;
    fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/?labelIds=${listId}&maxResults15`,
      {
        method: "GET",
        headers: new Headers({ Authorization: "Bearer " + accessToken }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then(function (val) {
        val.messages.map((msg) => {
          getEmailsWithInfo(msg.id);
        });
      });
  };

  const getEmailsWithInfo = (messageId) => {
    let accessToken = gapi.auth.getToken().access_token;
    fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}/?format=full`,
      {
        method: "GET",
        headers: new Headers({ Authorization: "Bearer " + accessToken }),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then(function (val) {
        const id = val.id;
        const codedBody = val.payload.parts[0].body.data;
        const decodedBody = decodeEmailBody(codedBody);
        if (decodedBody.length > 5000) {
          return decodedBody.slice(0, 5000);
        }
        const snippet = val.snippet;
        const emailFrom = returnFrom(val.payload.headers);
        const subject = returnSubject(val.payload.headers);
        const emailObject = {
          id: id,
          from: emailFrom,
          subject: subject,
          snippet: snippet,
          body: decodedBody,
        };
        dispatchFunc(emailObject);
        // console.log(emailObject)
      });
  };

  const decodeEmailBody = (codedMessageText) => {
    return atob(codedMessageText);
  };

  const returnFrom = (headers) => {
    const emailSender = headers.filter((msg) => msg.name === "From");
    return emailSender[0].value;
  };

  const returnSubject = (headers) => {
    const emailSubj = headers.filter((msg) => msg.name === "Subject");
    return emailSubj[0].value;
  };

  const resetHandler = () => {
    dispatch(resetEmailState());
  };

  const dispatchFunc = (obj) => {
    dispatch(refreshEmail(obj));
  };

  return (
    <div className="App">
      <div className="emailButtons">
        {/* <Login />
      <Logout /> */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={getLabelList}
        >
          Get Email
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={resetHandler}
        >
          Clear Emails
        </button>
      </div>
    </div>
  );
}

export default User;
