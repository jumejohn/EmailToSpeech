import { useSelector } from "react-redux";
const VOICERSSAPIKEY = process.env.REACT_APP_VOICERSS_API_KEY;

const DisplaySpeech = () => {
  const speech = useSelector((state) => state.emailState.body);

  const renderPlayer = () => {
    if (speech) {
      const srcUrl = `http://api.voicerss.org/?key=${VOICERSSAPIKEY}&hl=en-us&v=Amy&c=ogg&src=${speech}`;
      console.log(srcUrl);
      return <audio src={srcUrl} controls autoPlay />;
    } else {
      return "please reload your email";
    }
  };
  return <>{renderPlayer()}</>;
};

export default DisplaySpeech;
