import React from 'react';
import  Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import { TextField,FormControl,FormLabel,RadioGroup,
FormControlLabel,Radio,Button } from '@mui/material';
import styles from './settingUser.module.scss';

const SettingUser = () => {
  return (
    <div className={styles.profileSettingLeft}>
      <div className={styles.profileSettingLeftTitle}>
        <div className={styles.profileSettingLeftTitleIcon}>
          {<Diversity3OutlinedIcon />}
        </div>
        <div className={styles.profileSettingLeftTitleSubtitle}>Профиль</div>
      </div>

      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Имя :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <TextField
            label="Имя"
            fullWidth
            type="search"
            placeholder="Имя"
          ></TextField>
        </div>
      </div>

      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Фамилия :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <TextField
            label="Фамилия"
            fullWidth
            type="search"
            placeholder="Фамилия"
          ></TextField>
        </div>
      </div>

      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Почта :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <TextField
            label="Введите почту"
            fullWidth
            type="search"
            placeholder="bekkozha.ayan@mail.ru"
          ></TextField>
        </div>
      </div>

      {/*Нижния часть пользователя настройки*/}

      <FormControl
        sx={{
          mt: "40px",
        }}
      >
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          style={{ color: "#000" }}
        >
          Пол
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          row
        >
          <FormControlLabel
            value="Женский"
            control={<Radio />}
            label="Женский"
            sx={{
              color: "#696969",
            }}
          />
          <FormControlLabel
            value="Мужской"
            control={<Radio />}
            label="Мужской"
            sx={{
              color: "#696969",
            }}
          />
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        sx={{
          display: "block",
          mt: "10px",
          background: "#9294C9",
          "&:hover": {
            background: "#9294C9",
          },
        }}
      >
        Редактировать
      </Button>
    </div>
  );
};

export default SettingUser;