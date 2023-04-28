import React from 'react';
import styles from "../update.module.scss";
const ConditionsUpdateConcurs = () => {
  return (
    <div className={styles.sectionCondition}>
      <div className={styles.sectionUpdateTitle}>Условия</div>
      <textarea
        className={styles.sectionUpdateTextArea}
        placeholder="Условия конкурса"
      />
    </div>
  );
};

export default ConditionsUpdateConcurs;