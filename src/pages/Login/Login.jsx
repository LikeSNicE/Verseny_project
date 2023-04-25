import React from "react";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import InputCustom from "../../Components/InputCustom/InputCustom";
import { useForm } from "react-hook-form";
import { Grid, Link } from "@mui/material";
import styles from "./Login.module.scss";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
//import { Routes, Route,Link } from 'react-router-dom';

export default function Login() {
  const {
    reset,
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.containerLogin}>
          <div className={styles.containerLoginLogo}>
            <Logo />
            <h2>Добро пожаловать в Verseny</h2>
          </div>
          <Grid className={styles.containerLoginForm}>
            <InputCustom
              type="email"
              label="Введите email"
              errorText={errors?.email && errors?.email?.message}
              register={register("email", {
                required: "Поле обязателько к заполнению",
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              })}
            />
            <div className={styles.containerLoginInput}>
              <InputCustom
                type="password"
                label="Введите пароль"
                errorText={errors?.password && errors?.password?.message}
                register={register("password", {
                  required: "Поле обязателько к заполнению",
                  // pattern:
                  //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
                  minLength: {
                    value: 8,
                    message: 'Пароль должен содержать минимум 8 символов'
                  }
                })}
              />
              <Link
                href="/forgot-password"
                underline="hover"
                sx={{ fontWeight: 700, fontSize: "14px", color: "#7272d8" }}
              >
                Забыли пароль?
              </Link>
            </div>
          </Grid>
          <ButtonCustom type="submit" style={{ width: "100%" }}>
            Войти
          </ButtonCustom>
          <div className={styles.containerLoginFlex}>
            <h3>Нету аккаунта?</h3>
            <Link
              href="signin/user"
              underline="hover"
              sx={{
                marginLeft: "5px",
                fontWeight: 700,
                fontSize: "16px",
                color: "#7272d8",
              }}
            >
              Так зарегистрируетесь
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
