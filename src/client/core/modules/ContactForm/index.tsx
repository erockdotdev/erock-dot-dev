import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { connect } from 'react-redux';
import Recaptcha from 'react-recaptcha';
import FormikField from '@components/form-fields/FormikField';
import Button from '@components/Button';
import LoadingSpinner from '@components/LoadingSpinner';
import { toggleModal } from '@redux/actions';
import './contact-form.scss';

type Props = {
  handleToggleModal: () => {};
};

type values = {
  email: string | null;
  message: string | null;
  name: string | null;
};

const ContactForm: React.FC<Props> = props => {
  const [submitContactError, setSubmitContactError] = useState('');
  const [submitRecaptcha, setSubmitRecaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { handleToggleModal } = props;
  const submitMessage = (
    values: values,
    setSubmitting: (arg0: boolean) => void
  ) => {
    const { email, message, name } = values;
    setLoading(true);
    axios
      .post('/contact', {
        email,
        message,
        name
      })
      .then(response => {
        // eslint-disable-next-line no-console
        console.log('response in app', response);
        setSubmitted(true);

        setTimeout(() => {
          handleToggleModal();
        }, 500);

        setSubmitting(false);
        setLoading(false);
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.error('error in app', error);
        setSubmitContactError(
          "Sorry, that message didn't go through. Please try again."
        );
        setSubmitting(false);
        setLoading(false);
      });
  };

  const contactFormValidation = (values: values) => {
    let hasErrors: boolean = true;
    const errors: values = {
      email: '',
      message: '',
      name: ''
    };
    if (!values.email) {
      errors.email = 'Required';
      hasErrors = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      hasErrors = true;
      errors.email = 'Invalid email address';
    } else {
      hasErrors = false;
    }
    if (!values.message) {
      hasErrors = true;
      errors.message = 'Required';
    } else {
      hasErrors = false;
    }
    if (!values.name) {
      hasErrors = true;
      errors.name = 'Required';
    } else {
      hasErrors = false;
    }
    const returnErrors = hasErrors ? errors : {};
    return returnErrors;
  };

  const onloadCallback = () => {
    console.log('recaptcha loaded');
  };

  function verifyCallback(res) {
    if (res) {
      setSubmitRecaptcha(true);
    }
  }
  const renderForm = () => {
    if (submitted)
      return (
        <div className="contact-form__container__message-sent">
          <h2>Message Sent</h2>
        </div>
      );
    return (
      <React.Fragment>
        <div className="contact-form__container__modal-header">
          <h2>CONTACT ME</h2>
        </div>
        <Formik
          initialValues={{ email: '', message: '', name: '' }}
          validate={values => {
            return contactFormValidation(values);
          }}
          onSubmit={(values, { setSubmitting }) => {
            if (!submitRecaptcha) return setSubmitting(false);
            return submitMessage(values, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <FormikField
                label="Email"
                type="email"
                name="email"
                errorComponent="div"
                className="contact-form__container__from-email"
              />
              <FormikField
                label="Name"
                name="name"
                errorComponent="div"
                className="contact-form__container__from-email"
              />
              <FormikField
                label="Message"
                name="message"
                errorComponent="div"
                fieldType="textarea"
                className="contact-form__container__message"
              />
              <div className="contact-form__container__modal-footer">
                <Recaptcha
                  sitekey="6LeA5fgUAAAAAKvGu017bzZPwpkNFU7uh97p9ROA"
                  render="explicit"
                  onloadCallback={onloadCallback}
                  verifyCallback={verifyCallback}
                />
                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="contact-form__container__modal-footer__button"
                >
                  Submit
                </Button>

                {submitContactError && (
                  <p className="contact-form__container__send-email-error">
                    {submitContactError}
                  </p>
                )}
              </div>
              {loading && (
                <div className="contact-form__container__is-loading">
                  <LoadingSpinner />
                </div>
              )}
            </Form>
          )}
        </Formik>
      </React.Fragment>
    );
  };

  return <section className="contact-form__container">{renderForm()}</section>;
};

const mapDispatchToProps = {
  handleToggleModal: toggleModal
};

export default connect(null, mapDispatchToProps)(ContactForm);
