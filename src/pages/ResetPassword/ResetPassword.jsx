import React from "react";
import Logo from "../../assets/images/icons/logo.svg";
import styles from "./ResetPassword.module.scss";
import { Avatar } from "@mui/material";
import TextFieldUI from "../../Components/InputCustom/InputCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { useForm } from "react-hook-form";
import AvatarCustom from "../../Components/AvatarCustom/AvatarCustom";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const DataAvatar = {
    name: "Ubisoft",
    link: "/channel/id",
    description: "bekkozha.ayan@mail.ru",
    avatar:
      "https://img5.goodfon.ru/wallpaper/nbig/f/6e/the-last-of-us-part-2-odni-iz-nas-elli-ellie-ps4-game-art.jpg",
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.sectionResetPas}>
      <img className={styles.sectionResetPasImg} src={Logo} alt="Logo" />
      <div className={styles.sectionResetPasTitle}>
        Отлично! Вы cбросили пароль от аккаунта:
      </div>
      <div className={styles.sectionResetPasProfile}>
        {/* <Avatar
          className={styles.sectionResetPasProfileImg}
          src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"
          alt="profile photo"
        />
        <div className={styles.sectionResetPasProfileInfo}>
          <p className={styles.sectionResetPasProfileName}>Беккожа Аян</p>
          <p className={styles.sectionResetPasProfileCompany}>Ubisoft</p>
        </div> */}
        <AvatarCustom sizeAvatar={{width:"40px",height: '40px'}} data={DataAvatar}/>
      </div>
      <div className={styles.sectionResetPasInput}>
        <TextFieldUI
          type="password"
          label="Введите пароль"
          register={register("password", {
            required: true,
            // pattern:
            //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
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
          register={register("confirmPassword", {
            required: true,
            // pattern:
            //   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/,
            validate: (value) =>
              value === errors.password.current || "Passwords do not match",
          })}
          errorText={
            errors?.confirmPassword && errors?.confirmPassword?.message
          }
        />
      </div>
      <ButtonCustom
        className={styles.sectionResetPasBtn}
        type="submit"
      >
        Сбросить
      </ButtonCustom>
    </form>
  );
};

export default ResetPassword;
