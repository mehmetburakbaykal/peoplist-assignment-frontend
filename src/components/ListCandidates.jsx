import axios from "axios";
import React, { useEffect } from "react";

const ListICandidates = ({
  listCandidates,
  candidates,
  toggleModal,
  setCandidate,
}) => {
  const deleteCandidate = (id) => {
    axios
      .delete(`http://localhost:8080/candidate/remove/${id}`)
      .then(function () {
        listCandidates();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const editCandidate = (candidate) => {
    setCandidate(candidate);
  };

  useEffect(() => {
    listCandidates();
  }, []);

  return (
    <div className="list-container">
      <ul className="list-items">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="list-item">
            <div className="wrapper">
              <h3 className="full-name">{candidate.fullName}</h3>
              <div className="btn-container">
                <button
                  className="edit-btn"
                  onClick={() => {
                    toggleModal();
                    editCandidate(candidate);
                  }}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteCandidate(candidate.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>

            <hr />
            <h4 className="contact-inf">
              <br />
              <span className="phone">Phone Number: {candidate.phone}</span>
              <br />
              <span className="mail">E-mail: {candidate.email}</span>
            </h4>
            <h4 className="prev-interacts">{candidate.interactions}</h4>
            <h4 className="candidate-st">{candidate.status}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListICandidates;
