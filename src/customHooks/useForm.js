import { useState, useEffect } from 'react';
import { fields } from 'utils/initialStateForm';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
);

const useForm = (initialState, fieldErrorMessageToReset, callback) => {
  const [values, setValues] = useState(initialState);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    if (fieldErrorMessageToReset) handleResetErrorMessage();
    const atLeastOneError = Object.entries(values).find(field => {
      console.log(field);
      return field[1].isValid === false;
    });
    console.log('One error?', atLeastOneError);
    if (atLeastOneError && atLeastOneError[1].isValid === false) {
      setErrors(true);
    } else {
      setErrors(false);
    }
  }, [fieldErrorMessageToReset, values]);

  const validator = (field, value) => {
    switch (field) {
      case 'firstName':
      case 'lastName':
      case 'message':
        setValues(prevState => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            value: value,
          },
        }));
        break;
      case 'email':
        const isValid = validEmailRegex.test(value);
        setIsEmailValid(isValid);
        setValues(prevState => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            value: value,
          },
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    callback();
  };

  const clear = () => {
    setValues(fields);
  };

  const handleResetErrorMessage = () => {
    setValues(prevState => ({
      ...prevState,
      [fieldErrorMessageToReset]: {
        ...prevState[fieldErrorMessageToReset],
        isValid: 'pending',
      },
    }));
  };

  const handleFocusInput = event => {
    const { name, value } = event.target;
    setValues(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        focused: true,
      },
    }));
  };

  const handleBlurInput = event => {
    const { name } = event.target;
    setValues(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        isValid:
          (values[name]['value'] === '' && values[name]['focused']) ||
          (values[name]['value'].length < 5 && values[name]['focused']) ||
          (name === 'email' && !isEmailValid)
            ? false
            : true,
        focused: false,
      },
    }));
    console.log(values);
  };

  const handleChangeInput = event => {
    event.persist();
    const { name, value } = event.target;
    validator(name, value);
  };

  return {
    values,
    handleSubmit,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
    errors,
    clearForm: clear,
  };
};

export default useForm;
