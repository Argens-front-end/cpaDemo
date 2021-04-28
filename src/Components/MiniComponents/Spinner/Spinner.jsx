import React from "react";

import styles from './Spinner.module.css'

export default function Spinner() {
  return (
    <div className={styles["spinner-area"]}>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Загрузка...</span>
      </div>
    </div>
  );
}
