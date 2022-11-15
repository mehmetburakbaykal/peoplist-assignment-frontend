import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CreateCandidate from "./components/CreateCandidate";
import Header from "./components/Header";
import ListCandidates from "./components/ListCandidates";

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/candidate/getAllCandidates")
      .then(function (response) {
        setCandidates(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <CreateCandidate />
      <ListCandidates candidates={candidates} />
    </div>
  );
}

export default App;
