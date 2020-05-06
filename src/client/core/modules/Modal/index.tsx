import React, { useState } from 'react';
import { Modal as ReactModal } from 'react-responsive-modal';
import './modal.scss';

const Modal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <section className="modal__container">
      <button
        className="modal__container__button"
        type="button"
        onClick={openModal}
      >
        Contact
      </button>
      <ReactModal open={modalOpen} onClose={closeModal} center>
        <h2>Simple centered modal</h2>
      </ReactModal>
    </section>
  );
};

export default Modal;
