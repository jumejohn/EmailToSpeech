import "./App.css";
import Header from "./components/Header";
import DisplayEmails from "./containers/Dispaly_emails";
const VOICERSSAPIKEY = process.env.REACT_APP_VOICERSS_API_KEY;

function App() {
  const onLoad = () => {
    const url = `http://api.voicerss.org/?key=${VOICERSSAPIKEY}&hl=en-gb&v=Harry&c=ogg&src=Please%20login%20to%20continue`;
    return <audio src={url} controls autoPlay hidden />;
  };

  return (
    <div className="App">
      <div>{onLoad()}</div>
      <Header />
      <DisplayEmails />
    </div>
  );
}

export default App;
