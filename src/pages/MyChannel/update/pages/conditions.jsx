import React from 'react';
import styles from "../update.module.scss";
import ButtonCustom from '../../../../Components/ButtonCustom/ButtonCustom';
const ConditionsUpdateConcurs = () => {
  return (
    <div className={styles.sectionCondition}>
      <div className={styles.sectionUpdateTitle}>Условия</div>
      <textarea
        className={styles.sectionUpdateTextArea}
        placeholder="Условия конкурса"
      />
      <div className={styles.sectionUpdateMainBtnBox}>
          <ButtonCustom>Изменить</ButtonCustom>
        </div>
    </div>
  );
};

export default ConditionsUpdateConcurs;