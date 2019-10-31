import React, { useRef, useContext, useEffect } from 'react';
import { ScrollContext } from 'Context/ScrollContext';
import { Notification } from 'components/';
import styles from './Form.module.scss';

const Form = ({
  children,
  handleSubmit,
  isFormSubmitted,
  closeNotificationAfterFormSubmitted,
  clearForm,
  values,
}) => {
  const scroll = useContext(ScrollContext);
  const titleRef = useRef(null);

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
      <form onSubmit={handleSubmit}>{children}</form>
      {isFormSubmitted && (
        <Notification
          isVisible={isFormSubmitted}
          clearForm={clearForm}
          closeNotification={closeNotificationAfterFormSubmitted}
        >
          <p>
            Gentile {values.firstName} {values.lastName} la sua richiesta è
            stata inoltrata correttamente. Sarà presa in carico prossimamente e
            ricontattato al più presto.
          </p>
        </Notification>
      )}
    </div>
  );
};

export default Form;
