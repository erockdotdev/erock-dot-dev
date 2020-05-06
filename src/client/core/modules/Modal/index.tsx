import React, { useState } from 'react';
import axios from 'axios';
import { Modal as ReactModal } from 'react-responsive-modal';
import './modal.scss';

function sendEmail() {
  axios
    .post('/contact', {
      // firstName: 'Fred',
      // lastName: 'Flintstone'
    })
    .then(function(response) {
      console.log('response', response);
    })
    .catch(function(error) {
      console.log('error', error);
    });
}

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
        <button
          type="button"
          onClick={() => {
            sendEmail();
          }}
        >
          SEND EMAIL
        </button>
      </ReactModal>
    </section>
  );
};

export default Modal;
