import axios from "axios";
import React from "react";

const Modal = ({ toggleModal, listCandidates, candidate, setCandidate }) => {
  function handleChange(e) {
    const value = e.target.value;

    setCandidate({
      ...candidate,
      [e.target.name]: value,
    });
  }

  function handleClick(e) {
    e.preventDefault();
    toggleModal();

    if (candidate.id) {
      axios
        .put(`http://localhost:8080/candidate/edit/${candidate.id}`, candidate)
        .then(function (response) {
          console.log(response);
          listCandidates();
          setCandidate({
            fullName: "",
            phone: "",
            email: "",
            interactions: "",
            status: "",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      axios
        .post("http://localhost:8080/candidate/add", candidate)
        .then(function (response) {
          console.log(response);
          listCandidates();
          setCandidate({
            fullName: "",
            phone: "",
            email: "",
            interactions: "",
            status: "",
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  return (
    <div className="modal-container">
      <div className="overlay"></div>
      <div className="modal-content">
        <button
          className="close-btn"
          onClick={() => {
            toggleModal();
            setCandidate({
              fullName: "",
              phone: "",
              email: "",
              interactions: "",
              status: "",
            });
          }}
        >
          <i className="fa-solid fa-x fa-xl"></i>
        </button>
        <ul className="modal-inputs">
          <li className="inputs">
            <label htmlFor="name">Name-Surname: </label>
            <input
              type="text"
              name="fullName"
              value={candidate.fullName}
              onChange={handleChange}
            />
          </li>
          <li className="inputs">
            <label htmlFor="phone">Phone: </label>
            <input
              type="text"
              name="phone"
              value={candidate.phone}
              onChange={handleChange}
            />
          </li>
          <li className="inputs">
            <label htmlFor="email">E-mail: </label>
            <input
              type="text"
              name="email"
              value={candidate.email}
              onChange={handleChange}
            />
          </li>
          <li className="inputs">
            <label htmlFor="interactions">Previous Interactions: </label>
            <select
              name="interactions"
              id="interactions"
              value={candidate.interactions}
              onChange={handleChange}
            >
              <option value="None"></option>
              <option value="Called">Called</option>
              <option value="Mail sent">Mail sent</option>
            </select>
          </li>
          <li className="inputs">
            <label htmlFor="status">Candidate Status: </label>
            <select
              name="status"
              id="status"
              value={candidate.status}
              onChange={handleChange}
            >
              <option value="None"></option>
              <option value="Sourced">Sourced</option>
              <option value="Interviewing">Interviewing</option>
              <option value="Offer sent">Offer sent</option>
              <option value="Hired">Hired</option>
            </select>
          </li>
          <li className="submit">
            <input
              type="submit"
              name="submit"
              value="Submit"
              onClick={handleClick}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
