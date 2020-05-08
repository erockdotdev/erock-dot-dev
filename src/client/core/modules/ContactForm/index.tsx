import React from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import FormikField from '@components/form-fields/FormikField';
import Button from '@components/button';
import './contact-form.scss';

type values = {
  email: string | null;
  message: string | null;
};

function submitMessage(values: values, setSubmitting: (arg0: boolean) => void) {
  const { email, message } = values;
  console.log('is this runnign?');
  axios
    .post('/contact', {
      email,
      message
    })
    .then(response => {
      console.log('response in app', response);
      // this is where I'll need to call the toggle modal action
      setSubmitting(false);
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error('error in app', error);
      // handle API respose error
      setSubmitting(false);
    });
  setSubmitting(false);
}

function contactFormValidation(values: values) {
  let hasErrors: boolean | null = null;
  const errors: values = {
    email: '',
    message: ''
  };

  if (!values.email) {
    errors.email = 'Required';
    hasErrors = true;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    hasErrors = true;
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    hasErrors = true;
    errors.message = 'Required';
  }

  const returnErrors = hasErrors ? errors : {};

  return returnErrors;
}

const ContactForm: React.FC = () => {
  return (
    <section className="contact-form__container">
      <Formik
        initialValues={{ email: '', message: '' }}
        validate={values => {
          return contactFormValidation(values);
        }}
        onSubmit={(values, { setSubmitting }) => {
          submitMessage(values, setSubmitting);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormikField
              label="Email"
              type="email"
              name="email"
              errorComponent="div"
            />
            <FormikField
              label="Message"
              type="email"
              name="message"
              errorComponent="div"
              fieldType="textarea"
            />
            <Button label="Submit" disabled={isSubmitting} type="submit" />
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
