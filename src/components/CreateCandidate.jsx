import React, { useState } from "react";
import Modal from "./Modal";

const CreateCandidate = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button className="create-btn" onClick={toggleModal}>
        <i className="fa-solid fa-plus fa-xl"></i>
      </button>
      {modal && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default CreateCandidate;
