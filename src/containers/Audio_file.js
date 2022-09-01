import { useSelector } from "react-redux";
const VOICERSSAPIKEY = process.env.REACT_APP_VOICERSS_API_KEY;

const DisplaySpeech = () => {
  const speech = useSelector((state) => state.speech);

  const renderPlayer = () => {
    //return speech.map((t, index) => {
    const srcUrl = `http://api.voicerss.org/?key=${VOICERSSAPIKEY}&hl=en-us&v=Amy&c=ogg&src=${speech}`;
    console.log(srcUrl);
    return (
      <td>
        <audio src={srcUrl} controls autoPlay />
      </td>
    );
  };
  return <td>{renderPlayer()}</td>;
};

export default DisplaySpeech;
