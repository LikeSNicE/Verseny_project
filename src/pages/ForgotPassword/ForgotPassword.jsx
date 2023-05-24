import React, { useState } from "react";
import Logo from "../../assets/images/icons/logo.svg";
import styles from "./ForgotPassword.module.scss";
import TextFieldUI from "../../Components/InputCustom/InputCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import AlertCustom from "../../Components/AlertCustom/AlertCustom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

   const { Authstore } = useContext(Context);

  

  // const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

  // context
 

  const onSubmit = (data) => {
    Authstore.forgotPassword(data.email)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.sectionResPas}>
      <img className={styles.sectionResPasImg} src={Logo} alt="Logo" />
      <div className={styles.sectionResPasTitle}>Забыли пароль ?</div>
      <div className={styles.sectionResPasSubtitle}>
        Выход есть! Для этого мы можем отправить вам на почту инструкций для
        востаналение:
      </div>
      <div className={styles.sectionResPasInput}>
        <TextFieldUI
          type="email"
          label="Email"
          errorText={errors?.email && errors?.email?.message}
          register={register("email", {
            required: "Поле обязателько к заполнению",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
      </div>

      <AlertCustom
        severity={Authstore.severity}
        error={Authstore.messageAlert}
        setError={Authstore.setMessageAlert}
      />

      <ButtonCustom
        type="submit"
        disabled={!isValid}
        className={styles.sectionResPasBtn}
      >
        Отправить
      </ButtonCustom>

      <div className={styles.sectionResPasNotExistUser}>
        <p>Нету аккаунта? </p>
        <Link to="/signin">Так зарегистрируетесь</Link>
      </div>
    </form>
  );
};

export default observer(ForgotPassword);
