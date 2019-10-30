import React from 'react';
import styles from './FormValidationErrorFeedback.module.scss';

const FormValidationErrorFeedback = ({
  tag,
  showErrorMessage,
  fieldName,
  errorMessage,
  hideErrorMessage,
}) => {
  const { FormValidationErrorFeedback, error_message, show } = styles;
  return (
    <div
      onClick={hideErrorMessage(fieldName)}
      className={`
          ${FormValidationErrorFeedback} 
          ${showErrorMessage ? show : ''}
          ${styles[tag]}
        `}
    >
      <p className={error_message}>{errorMessage}</p>
    </div>
  );
};

export default FormValidationErrorFeedback;
