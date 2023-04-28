import React from 'react';
import styles from '../create.module.scss';

const ConditionsConcurs = () => {
  return (
    <div className={styles.sectionConditions}>
      <textarea
        className={styles.sectionDescriptionTextArea}
        placeholder="Условия конкурса"
      />
    </div>
  );
};

export default ConditionsConcurs;