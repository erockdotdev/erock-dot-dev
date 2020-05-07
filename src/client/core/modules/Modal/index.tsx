import React, { useState } from 'react';
import axios from 'axios';
import { Modal as ReactModal } from 'react-responsive-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './modal.scss';

function submitMessage(values, setSubmitting) {
  console.log('values', values);
  const { email, message } = values;
  axios
    .post('/contact', {
      email,
      message
    })
    .then(function(response) {
      console.log('response in app', response);
      setSubmitting(false);
    })
    .catch(function(error) {
      console.log('error in app', error);
      setSubmitting(false);
    });
  setSubmitting(false);
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
        <Formik
          initialValues={{ email: '', message: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            submitMessage(values, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </ReactModal>
    </section>
  );
};

export default Modal;
