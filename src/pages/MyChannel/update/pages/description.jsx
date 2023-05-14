import React from "react";
import styles from "../update.module.scss";
import ButtonCustom from "../../../../Components/ButtonCustom/ButtonCustom";

const DescriptionUpdateConcurs = () => {
  return (
    <div className={styles.sectionDescription}>
      <div className={styles.sectionUpdateTitle}>Описание</div>
      <textarea
        className={styles.sectionUpdateTextArea}
        placeholder="Описание конкурса"
      />
      <div className={styles.sectionUpdateMainBtnBox}>
        <ButtonCustom>Изменить</ButtonCustom>
      </div>
    </div>
  );
};

export default DescriptionUpdateConcurs;
