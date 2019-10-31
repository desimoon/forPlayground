import React from 'react';
import { FormValidationErrorFeedback } from 'components/';
import styles from './FormField.module.scss';

const FormField = props => {
  let {
    tag = 'input',
    type = 'text',
    errorMessage,
    isFieldFocused,
    hideErrorMessage,
    ...attr
  } = props;

  const { FormField, formElement, hide } = styles;
  const showErrorMessage = errorMessage && !isFieldFocused;
  let field;

  switch (tag) {
    case 'input':
      field = (
        <input
          className={`${formElement} ${showErrorMessage ? hide : ''}`}
          type={type}
          {...attr}
        />
      );
      break;
    case 'textarea':
      field = (
        <textarea
          className={`${formElement} ${showErrorMessage ? hide : ''}`}
          {...attr}
        />
      );
      break;
    default:
  }

  return (
    <div className={`${FormField} ${styles[attr.name]}`}>
      <FormValidationErrorFeedback
        tag={tag}
        showErrorMessage={showErrorMessage ? true : false}
        fieldName={attr.name}
        errorMessage={errorMessage}
        hideErrorMessage={hideErrorMessage}
      />
      {field}
    </div>
  );
};

export default FormField;
