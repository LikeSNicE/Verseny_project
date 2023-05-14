import React from 'react';
import styles from '../create.module.scss';
import ImageUploader from '../../../../Components/ImageUploader/ImageUploader';
import TextFieldUI from '../../../../Components/InputCustom/InputCustom';
import SelectUI from '../../../../Components/Select/Select';

const MainConcurs = () => {

   const arraySelectOptionCategory = [
     { label: "По дате", value: "1" },
     { label: "По количеству", value: "2" },
   ];

   const arraySelectOptionTypeParticipation = [
     { label: "По дате", value: "1" },
     { label: "По количеству", value: "2" },
   ];

  return (
    <div className={styles.sectionMain}>
      <ImageUploader />
      <div className={styles.sectionMainBlockFirst}>
        <div className={styles.sectionMainBlockFirstInput}>
          <TextFieldUI variant="standard" label="Введите название" />
        </div>
        <div className={styles.sectionMainBlockFirstSelect}>
          <SelectUI
            option={arraySelectOptionCategory}
            label="Выберите категорию"
          />
        </div>
      </div>

      <div className={styles.sectionMainTitleDate}>Дата начало - конец : </div>

      <div className={styles.sectionMainBlockSecond}>
        <div className={styles.sectionMainBlockSecondDate}>
          <TextFieldUI type={"date"} style={{ marginRight: "10px" }} />
          <span>-</span>
          <TextFieldUI type={"date"} style={{ marginLeft: "10px" }} />
        </div>
        <div className={styles.sectionMainBlockSecondCategory}>
          <SelectUI
            option={arraySelectOptionTypeParticipation}
            label="Выберите тип участия"
          />
        </div>
      </div>

      <div className={styles.sectionMainTextWarning}>
        При изменение сменить тип участия нельзя
      </div>
    </div>
  );
};

export default MainConcurs;