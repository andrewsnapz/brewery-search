import React from "react";
import styles from "./BaseModal.module.scss";

const BaseModal = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>{props.children}</div>
    </div>
  );
};

export default BaseModal;
