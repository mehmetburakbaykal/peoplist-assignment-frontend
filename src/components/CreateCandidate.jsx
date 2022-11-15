import React from "react";

const CreateCandidate = ({ toggleModal }) => {
  return (
    <>
      <button className="create-btn" onClick={toggleModal}>
        <i className="fa-solid fa-plus fa-xl"></i>
      </button>
    </>
  );
};

export default CreateCandidate;
