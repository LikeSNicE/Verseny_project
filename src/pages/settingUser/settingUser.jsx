import React, { useEffect, useMemo, useState } from "react";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import styles from "./settingUser.module.scss";
import InputCustom from "../../Components/InputCustom/InputCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import RadioButtonCustom from "../../Components/RadioBtn/RadioBtn";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { useForm, Controller } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../..";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import AlertCustom from "../../Components/AlertCustom/AlertCustom";

const SettingUser = () => {
  const {
    handleSubmit,
    setValue,
    register,
    formState: { isValid },
    reset,
    getValues,
  } = useForm();
  const { Authstore } = useContext(Context);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("error");

  useEffect(() => {
    reset({
      name: Authstore.user.name,
      email: Authstore.user.email,
    });
  }, [reset, Authstore.user]);

  const onSubmit = (data) => {
    console.log(data);
    Authstore.updateDataUser(data, Authstore.user.id);
    setMessage("Вы успешно обновили данные :)");
    setSeverity("success");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.profileSettingLeft}
    >
      <div className={styles.profileSettingLeftTitle}>
        <div className={styles.profileSettingLeftTitleIcon}>
          {<PersonOutlineOutlinedIcon />}
        </div>
        <div className={styles.profileSettingLeftTitleSubtitle}>Профиль</div>
      </div>

      <div>
        
      </div>
      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Ф.и.о :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <InputCustom
            register={register("name", {
              required: "Пожалуйста заполните имя",
            })}
            label="Ф.И.О"
          />
        </div>
      </div>

      <div className={styles.profileSettingLeftField}>
        <div className={styles.profileSettingLeftFieldName}>Почта :</div>
        <div className={styles.profileSettingLeftFieldInput}>
          <InputCustom
            register={register("email", {
              required: "Пожалуйста заполните почту",
            })}
            label="Введите почту"
          />
        </div>
      </div>


      <div className={styles.profileSettingLeftBtnEdit}>
        <ButtonCustom
          type="submit"
          variant="contained"
          children={"Редактировать"}
          disabled={!isValid}
        />
      </div>

      <div className={styles.notification}>
        <AlertCustom
          severity={severity}
          error={message}
          setError={setMessage}
        />
      </div>
    </form>
  );
};

export default observer(SettingUser);
