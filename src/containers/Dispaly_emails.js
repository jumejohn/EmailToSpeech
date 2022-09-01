import DisplaySpeech from "./Audio_file";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DisplayEmails = () => {
  const emailObject = useSelector((state) => state.emailState)

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
        {emailObject.map(emailItem => 

          <tr id={emailItem.id}>
          <td id={emailItem.id + 'from'} scope="col">{emailItem.from}</td>
          <td id={emailItem.id + 'subj'} scope="col">{emailItem.subject}</td>
          <td id={emailItem.id + 'snip'} scope="col">{emailItem.snippet}</td>
          <td id={emailItem.id + 'play'} scope="col">Play</td>
        </tr>

        )
      }
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
