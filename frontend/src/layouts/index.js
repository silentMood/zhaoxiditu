import React from 'react';
import styles from './index.module.css';

function BasicLayout(props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to create-webapp!</h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
