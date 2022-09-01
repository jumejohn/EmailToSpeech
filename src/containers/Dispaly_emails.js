import { useSelector } from "react-redux";

const VOICERSSAPIKEY = process.env.REACT_APP_VOICERSS_API_KEY;

const DisplayEmails = () => {
  const emailObject = useSelector((state) => state.emailState);

  const renderPlayer = (text) => {
    if (emailObject) {
      const srcUrl = `http://api.voicerss.org/?key=${VOICERSSAPIKEY}&hl=en-us&v=Amy&c=ogg&src=${text}`;
      console.log(srcUrl);
      return <audio src={srcUrl} controls autoPlay />;
    } else {
      return "please reload your email";
    }
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">From</th>
          <th scope="col">Subject</th>
          <th scope="col">Snippet</th>
          <th scope="col">Audio</th>
        </tr>
      </thead>
      <tbody>
        {emailObject.map((emailItem) => (
          <tr id={emailItem.id}>
            <td id={emailItem.id + "from"}>{emailItem.from}</td>
            <td id={emailItem.id + "subj"}>{emailItem.subject}</td>
            <td id={emailItem.id + "snip"}>{emailItem.snippet}</td>
            <td id={emailItem.id + "play"}>{renderPlayer(emailItem.body)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayEmails;
