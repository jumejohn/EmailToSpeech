import DisplaySpeech from "./Audio_file";
import { useSelector } from "react-redux";

const DisplayEmails = () => {
  const emailObject = useSelector((state) => state.emailState)
  console.log(emailObject)
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">From</th>
          <th scope="col">Subject</th>
          <th scope="col">Snippet</th>
          <th scope="col">Aduio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">3</th>
          <td>Larry the Bird</td>
          <td>Random Text</td>
          <DisplaySpeech />
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayEmails;
