import React from 'react';
import styles from '../create.module.scss';
import ImageUploader from '../../../../Components/ImageUploader/ImageUploader';
import TextFieldUI from '../../../../Components/InputCustom/InputCustom';
import SelectUI from '../../../../Components/Select/Select';

const MainConcurs = () => {
  return (
    <div className={styles.sectionMain}>
      <ImageUploader />
      <div className={styles.sectionMainBox}>
        <TextFieldUI variant="standard" label="Введите название" />
      </div>
    </div>
  );
};

export default MainConcurs;