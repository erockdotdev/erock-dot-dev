import React from 'react';
import { Modal as ReactModal } from 'react-responsive-modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalSelector } from '@redux/selectors';
import { toggleModal } from '@redux/actions';
import './modal.scss';

type Props = {
  buttonLabel: string;
  onClick: () => {};
};

const Modal: React.FC<Props> = props => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(toggleModalSelector);
  const { children, buttonLabel, onClick: onClickModal } = props;
  const openModal = () => {
    onClickModal();
    dispatch(toggleModal());
  };
  const closeModal = () => {
    dispatch(toggleModal());
  };

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
