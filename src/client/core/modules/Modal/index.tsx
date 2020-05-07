import React, { useState } from 'react';
import { Modal as ReactModal } from 'react-responsive-modal';
import './modal.scss';

type Props = {
  buttonLabel: string;
};

const Modal: React.FC<Props> = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const { children, buttonLabel } = props;
  return (
    <section className="modal__container">
      <button
        className="modal__container__button"
        type="button"
        onClick={openModal}
      >
        {buttonLabel}
      </button>
      <ReactModal open={modalOpen} onClose={closeModal} center>
        {children}
      </ReactModal>
    </section>
  );
};

export default Modal;
