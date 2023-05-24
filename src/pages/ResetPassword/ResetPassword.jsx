import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/icons/logo.svg";
import styles from "./ResetPassword.module.scss";
import { Avatar } from "@mui/material";
import TextFieldUI from "../../Components/InputCustom/InputCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { useForm } from "react-hook-form";
import AvatarCustom from "../../Components/AvatarCustom/AvatarCustom";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import LoadingCustom from "../../Components/LoadingCustom/LoadingCustom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const { Authstore } = useContext(Context);
  const { token } = useParams();

  useEffect(() => {
    Authstore.recognizeUserToToken(token)
      .then((response) => {
        setSuccess(response.success);
        setUser(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
    nickname: "",
    description: "",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    console.log(user.id);
    Authstore.isLoadingButton = true;
    try {
      Authstore.resetPassword({ ...data, user_id: user.id,email: user.email });
      navigate("/login");
    } catch (error) {
    } finally {
      Authstore.isLoadingButton = false;
    }
    // reset();
  };

  const getUserData = (user) => {
    return {
      name: user.name,
      description: user.email,
      avatar: user.avatar,
    };
  };

  if (Authstore.isLoading) {
    return <LoadingCustom />;
  }

  if (!success) {
    return <div>Пароль был изпользован</div>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.sectionResetPas}>
      <img className={styles.sectionResetPasImg} src={Logo} alt="Logo" />
      <div className={styles.sectionResetPasTitle}>Сброс Пароля :</div>
      <div className={styles.sectionResetPasProfile}>
        <AvatarCustom
          sizeAvatar={{ width: "40px", height: "40px" }}
          data={getUserData(user)}
        />
      </div>
      <div className={styles.sectionResetPasInput}>
        <TextFieldUI
          type="password"
          label="Введите пароль"
          register={register("password", {
            required: true,
            minLength: {
              value: 8,
              message: "Пароль должен содержать минимум 8 символов",
            },
          })}
          errorText={errors?.password && errors?.password?.message}
        />
      </div>
      <div className={styles.sectionResetPasInput}>
        <TextFieldUI
          type="password"
          label="Введите пароль повторно"
          register={register("password_confirmation", {
            required: true,
            // validate: (value) =>
            //   value === errors.password.current || "Passwords do not match",
          })}
          errorText={
            errors?.confirmPassword && errors?.confirmPassword?.message
          }
        />
      </div>
      <ButtonCustom className={styles.sectionResetPasBtn} type="submit">
        Сбросить
      </ButtonCustom>
    </form>
  );
};

export default observer(ResetPassword);
