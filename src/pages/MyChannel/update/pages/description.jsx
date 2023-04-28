import React from "react";
import styles from "../update.module.scss";

const DescriptionUpdateConcurs = () => {
  return (
    <div className={styles.sectionDescription}>
      <div className={styles.sectionUpdateTitle}>Описание</div>
      <textarea className={styles.sectionUpdateTextArea} placeholder="Описание конкурса" />
    </div>
  );
};

export default DescriptionUpdateConcurs;
