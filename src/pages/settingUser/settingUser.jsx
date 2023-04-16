import React from "react";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import styles from "./settingUser.module.scss";
import InputCustom from "../../Components/InputCustom/InputCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import RadioButtonCustom from "../../Components/RadioBtn/RadioBtn";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";



const SettingUser = () => {

  const arrayRadioBtn = ["Мужской","Женский"]

  return (
    <div className={styles.profileSettingLeft}>
      <div className={styles.profileSettingLeftTitle}>
        <div className={styles.profileSettingLeftTitleIcon}>
          {<PersonOutlineOutlinedIcon />}
        </div>
        <div className={styles.profileSettingLeftTitleSubtitle}>Профиль</div>
      </div>

      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Имя :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <InputCustom label="Имя" />
        </div>
      </div>

      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Фамилия :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <InputCustom label="Фамилия" />
        </div>
      </div>

      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Почта :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <InputCustom label="Введите почту" />
        </div>
      </div>

      {/*Нижния часть пользователя настройки*/}

      <RadioButtonCustom
        radio={arrayRadioBtn}
        formLabel="Пол"
        row
        className={styles.profileSettingLeftBtnRadioSection}
      />

      <ButtonCustom
        variant="contained"
        children={"Редактировать"}
        className={styles.profileSettingLeftBtnEdit}
      />
    </div>
  );
};

export default SettingUser;
