import React, { useState, useEffect } from 'react';
import useInterval from 'customHooks/useInterval';
import styles from './Timer.module.scss';

const Timer = ({ closeNotification, clearForm }) => {
  const time = 30;
  let circumference = 2 * 12 * Math.PI;
  let latch = circumference / time;

  const [seconds, setSeconds] = useState(time);
  const [progress, setProgress] = useState(circumference);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (seconds === 0) {
      setIsRunning(false);
      closeNotification(false);
      clearForm();
    }
    setProgress(progress - latch);
  }, [seconds]);

  useInterval(
    () => {
      setSeconds(seconds - 1);
    },
    isRunning ? 1000 : null,
  );

  return (
    <svg
      width="30"
      height="30"
      className={styles.Timer}
      // onClick={() => closeNotification(false)}
    >
      <circle
        className={styles.external}
        r="12"
        cx="15"
        cy="15"
        fill="transparent"
        strokeWidth="6"
      />
      <circle
        className={styles.inner}
        r="12"
        cx="15"
        cy="15"
        fill="transparent"
        strokeWidth="2"
        strokeDasharray={circumference}
        strokeDashoffset={progress}
      />
      <text
        x="15"
        y="15"
        className={styles.seconds}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {seconds}
      </text>
    </svg>
  );
};

export default Timer;
