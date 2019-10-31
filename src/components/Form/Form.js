import React, { useState, useRef, useContext, useEffect } from 'react';
import { ScrollContext } from 'Context/ScrollContext';
import { Notification, FormField, Button } from 'components/';
import useForm from 'customHooks/useForm';
import { fields } from 'utils/initialStateForm';
import styles from './Form.module.scss';

const Form = () => {
  const scroll = useContext(ScrollContext);
  const titleRef = useRef(null);
  const [errorMessageToHide, setErrorMessageToHide] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmitForm = () => {
    setIsFormSubmitted(true);
  };

  const handleHideErrorValidation = field => event => {
    setErrorMessageToHide(field);
    setTimeout(() => setErrorMessageToHide(''), 500);
  };

  const {
    values,
    handleChangeInput,
    handleFocusInput,
    handleBlurInput,
    handleSubmit,
    errors,
    clearForm,
  } = useForm(fields, errorMessageToHide, handleSubmitForm);

  useEffect(() => {
    if (titleRef.current.id === scroll.clickedLink) {
      let titleRefTopPosition = titleRef.current.getBoundingClientRect().top;
      titleRefTopPosition += window.pageYOffset;
      window.scrollTo({
        behavior: 'smooth',
        top: titleRefTopPosition - 62,
      });
    }
  }, [scroll.clickedLink]);

  console.log('form');

  return (
    <div className={styles.Form}>
      <div className={styles.contactUsInfo}>
        <h2
          id="contact us"
          className="section-title"
          ref={titleRef}
          style={{ marginBottom: 40 }}
        >
          Contact
          <br />
          us.
        </h2>
        <address>
          Playground srl
          <br />
          Via G. Mazzini 3/C,
          <br />
          Cernusco sul Naviglio (Milano)
          <br />
          -<br />T +39 0240706003
        </address>
      </div>
      <form onSubmit={handleSubmit}>
        {Object.entries(values).map(field => {
          console.log('F', field);
          const label = field[0];
          const {
            value,
            type,
            tag,
            placeholder,
            focused,
            errorMessage,
            isValid,
          } = field[1];

          return (
            <FormField
              type={type}
              tag={tag}
              name={label}
              placeholder={placeholder}
              value={value}
              onChange={handleChangeInput}
              onFocus={handleFocusInput}
              onBlur={handleBlurInput}
              errorMessage={!isValid ? errorMessage : ''}
              isFieldFocused={focused}
              hideErrorMessage={handleHideErrorValidation}
            />
          );
        })}
        <Button
          type="submit"
          background="#fff"
          color="#000"
          border="1px solid #fff"
          disabled={errors}
        >
          Send &gt;
        </Button>

        {errors && (
          <Button
            background="transparent"
            color="#607d8b"
            border="1px solid #607d8b"
            action={clearForm}
          >
            clear
          </Button>
        )}
      </form>

      <Notification
        isVisible={isFormSubmitted}
        clearForm={clearForm}
        closeNotification={setIsFormSubmitted}
      >
        <p>
          Gentile{' '}
          <span className={styles.notificationClientInfo}>
            {values.firstName.value}
          </span>{' '}
          <span className={styles.notificationClientInfo}>
            {values.lastName.value}
          </span>
          <br /> la sua richiesta è stata inoltrata correttamente. Sarà presa in
          carico prossimamente e ricontattato al più presto.
        </p>
      </Notification>
    </div>
  );
};

export default Form;
