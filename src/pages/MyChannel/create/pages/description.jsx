import React from "react";
import ButtonGroupCustom from "../../../../Components/ButtonGroupCustom/ButtonGroupCustom";
import styles from "../create.module.scss";

const DescriptionConcurs = () => {
  return (
    <div className={styles.sectionDescription}>
      {/* <div className={styles.sectionDescriptionGroupFont}>
        <ButtonGroupCustom />
      </div> */}
      <textarea
        className={styles.sectionDescriptionTextArea}
        placeholder="Описание конкурса"
      />
    </div>
  );
};

export default DescriptionConcurs;
