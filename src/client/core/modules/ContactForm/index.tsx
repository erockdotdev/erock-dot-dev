import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './contact-form.scss';

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

const ContactForm: React.FC = () => {
  return (
    <section className="modal__container">
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
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            Message
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
