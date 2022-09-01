import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import DisplayEmails from "./containers/Dispaly_emails";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <User /> */}
      <DisplayEmails />
    </div>
  );
}

export default App;
