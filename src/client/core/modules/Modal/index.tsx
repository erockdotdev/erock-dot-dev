import React from 'react';
import { Modal as ReactModal } from 'react-responsive-modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalSelector } from '@redux/selectors';
import { toggleModal } from '@redux/actions';
import './modal.scss';

type Props = {
  buttonLabel: string;
};

const Modal: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(toggleModalSelector);
  const openModal = () => {
    dispatch(toggleModal());
  };
  const closeModal = () => {
    dispatch(toggleModal());
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
