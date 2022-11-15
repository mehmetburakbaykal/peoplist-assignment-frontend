import axios from "axios";
import { useState } from "react";
import "./App.css";
import CreateCandidate from "./components/CreateCandidate";
import Header from "./components/Header";
import ListCandidates from "./components/ListCandidates";
import Modal from "./components/Modal";

function App() {
  const [candidates, setCandidates] = useState([]);

  const [modal, setModal] = useState(false);

  const [candidate, setCandidate] = useState({
    fullName: "",
    phone: "",
    email: "",
    interactions: "",
    status: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const listCandidates = () => {
    axios
      .get("http://localhost:8080/candidate/getAllCandidates")
      .then(function (response) {
        setCandidates(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Header />
      <CreateCandidate
        listCandidates={listCandidates}
        toggleModal={toggleModal}
      />
      <ListCandidates
        listCandidates={listCandidates}
        candidates={candidates}
        toggleModal={toggleModal}
        setCandidate={setCandidate}
      />
      {modal && (
        <Modal
          toggleModal={toggleModal}
          listCandidates={listCandidates}
          candidate={candidate}
          setCandidate={setCandidate}
        />
      )}
    </div>
  );
}

export default App;
