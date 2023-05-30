import React, { useContext, useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import InputCustom from "../../Components/InputCustom/InputCustom";
import { useForm } from "react-hook-form";
import { Grid, Link, Alert, Snackbar } from "@mui/material";
import styles from "./Login.module.scss";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import LoadingCustom from "../../Components/LoadingCustom/LoadingCustom";
import AlertCustom from "../../Components/AlertCustom/AlertCustom";
import FetchAuthService from "../../services/fetchService";

function Login() {
  // use-form
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const { Authstore } = useContext(Context);

  const [error, setError] = useState("");

  const onSubmit = async (data) => {
  
    const formData = new FormData();
    for (let prop in data) {
      formData.append(prop, data[prop]);
    }
    
    const loginResult = await Authstore.login(formData);

    console.log(loginResult)

    if (loginResult.isAuth) {
      localStorage.setItem("token", loginResult.user.access_token);
      Authstore.setAuth(loginResult.isAuth);
      Authstore.setUser(loginResult.user.user);
    } else {
      setError(loginResult.message)
    }
  };

  if (Authstore.isLoading) {
    return <LoadingCustom />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 0 40px",
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
                  // minLength: {
                  //   value: 8,
                  //   message: "Пароль должен содержать минимум 8 символов",
                  // },
                })}
              />
              <AlertCustom setError={setError} error={error} />
              <Link
                href="/forgot-password"
                underline="hover"
                sx={{ fontWeight: 700, fontSize: "14px", color: "#7272d8" }}
              >
                Забыли пароль?
              </Link>
            </div>
          </Grid>
          <ButtonCustom
            loading={Authstore.isLoadingButton}
            type="submit"
            style={{ width: "100%" }}
            disabled={!isValid}
          >
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

export default observer(Login);
