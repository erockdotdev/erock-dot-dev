import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './formik-field.scss';

type Props = {
  label: string;
  type: string;
  name: string;
  errorComponent: string;
  fieldType?: string;
  className?: string;
};

const FormikField: React.FC<Props> = props => {
  const {
    label,
    name,
    errorComponent,
    type = 'text',
    fieldType = 'input',
    className
  } = props;
  // add logic to toggle classes on text area or input
  return (
    <div className="formik-field__container">
      <label htmlFor={name}>{label}</label>
      <Field as={fieldType} type={type} name={name} className={className} />
      <ErrorMessage
        className="formik-field__container__error"
        name={name}
        component={errorComponent}
      />
    </div>
  );
};

export default FormikField;
