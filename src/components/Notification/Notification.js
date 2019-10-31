import React from 'react';
import { Timer } from 'components/';
import styles from './Notification.module.scss';

const Notification = ({
  isVisible = '',
  closeNotification,
  clearForm,
  children,
}) => {
  return (
    <div className={`${styles.Notification} ${isVisible && styles.show}`}>
      {children}
      {isVisible && (
        <Timer closeNotification={closeNotification} clearForm={clearForm} />
      )}
    </div>
  );
};

export default Notification;
