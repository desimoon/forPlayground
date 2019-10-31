import { useState, useEffect } from 'react';
import { fields } from 'utils/initialStateForm';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
);

const useForm = (initialState, resetErrorMessageField, callback) => {
  const [values, setValues] = useState(initialState);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    handleResetErrorMessage();
  }, [resetErrorMessageField]);

  const validator = (field, value) => {
    switch (field) {
      case 'firstName':
      case 'lastName':
      case 'message':
        setValues(prevState => ({
          ...prevState,
          [field]: {
            ...prevState[field],
            field: value,
            errorMessage:
              value.length < 5 && values[field]['focused']
                ? `${field} must be 5 characters long!`
                : '',
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
            field: value,
            errorMessage: isValid ? '' : 'Email is not valid!',
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
      numOfError:
        prevState.numOfError > 0 &&
        prevState[resetErrorMessageField].errorMessage
          ? prevState.numOfError - 1
          : prevState.numOfError,
      [resetErrorMessageField]: {
        ...prevState[resetErrorMessageField],
        errorMessage: '',
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
        // errorMessage: '',
      },
    }));
  };

  const handleBlurInput = event => {
    const { name } = event.target;
    setValues(prevState => ({
      ...prevState,
      numOfError:
        (values[name]['field'] === '' && values[name]['focused']) ||
        (values[name]['field'].length < 5 && values[name]['focused'])
          ? prevState.numOfError + 1
          : prevState.numOfError,
      [name]: {
        ...prevState[name],
        errorMessage:
          (values[name]['field'] === '' && values[name]['focused']) ||
          (values[name]['field'].length < 5 && values[name]['focused']) ||
          (name === 'email' && !isEmailValid)
            ? name === 'email'
              ? 'email is not valid'
              : `${name} must be 5 characters long!`
            : '',
        focused: false,
      },
    }));
  };

  const handleChangeInput = event => {
    event.persist();
    const { name, value } = event.target;
    validator(name, value);
    // setValues(prevState => ({
    //   ...prevState,
    //   [name]: {
    //     ...prevState[name],
    //     field: value,
    //   },
    // }));
  };

  return {
    values,
    handleSubmit,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
    clearForm: clear,
  };
};

export default useForm;
