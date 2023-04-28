import React from 'react';
import styles from '../update.module.scss';
import ImageUploader from '../../../../Components/ImageUploader/ImageUploader';
import TextFieldUI from '../../../../Components/InputCustom/InputCustom';
import ButtonCustom from '../../../../Components/ButtonCustom/ButtonCustom';

const MainUpdateConcurs = () => {
  return (
    <div className={styles.sectionUpdateMain}>
      <div className={styles.sectionUpdateTitle}>Основная</div>
      <div className={styles.sectionUpdateMainPosterChanging}>
        <ImageUploader />
      </div>
      <div className={styles.sectionUpdateMainNameChanging}>
        <TextFieldUI label="Введите название" variant="standard" />
      </div>
      <div className={styles.sectionUpdateMainTitleData}>
        Дата начало - конец :
      </div>
    </div>
  );
};

export default MainUpdateConcurs;