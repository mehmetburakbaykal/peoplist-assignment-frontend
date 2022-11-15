import React from "react";

const ListICandidates = ({ candidates }) => {
  return (
    <div className="list-container">
      <ul className="list-items">
        {candidates.map((candidate) => (
          <li key={candidate.id} className="list-item">
            <div className="wrapper">
              <h3 className="full-name">{candidate.fullName}</h3>
              <button className="dot-btn">
                <i className="fa-solid fa-ellipsis-vertical fa-xl"></i>
              </button>
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
