import React, { useEffect } from 'react'
import TextFieldUI from '../../../Components/InputCustom/InputCustom';
import RadioButtonCustom from '../../../Components/RadioBtn/RadioBtn';
import {useOutletContext } from 'react-router-dom';
import styles from '../Signin.module.scss';
import { useForm } from 'react-hook-form';

export default function User() {
  const contextOutlet = useOutletContext();

  useEffect(()=>{
    contextOutlet.setValue("gender","");
  },[]); 

  const {handleSubmit,reset,register,formState: {
    errors
  }} = useForm({
    mode: 'onBlur'
  })
   
  return (
    <div className={styles.containerSigninForm}>
      <TextFieldUI
        register={contextOutlet.register("name")}
        label="Введите имя"
      />
      <TextFieldUI
        register={contextOutlet.register("surname")}
        label="Введите фамилия"
      />
      <RadioButtonCustom
        onChange={(e) => contextOutlet.setValue("gender", e.target.value)}
        defaultChecked={contextOutlet.getValues("gender")}
        radio={["Мужской", "Женский"]}
        formLabel={"Пол"}
      />
      <TextFieldUI
        type="email"
        label="Email"
        errorText={errors?.email && errors?.email?.message}
        register={register("email", {
          required: "Поле обязателько к заполнению",
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
      />
      <TextFieldUI
        type="password"
        label="Пароль"
        errorText={errors?.email && errors?.email?.message}
        register={register("password", {
          required: "Поле обязателько к заполнению",
          minLength: {
            value: 8,
            message: "Пароль должен содержать минимум 8 символов",
          },
        })}
      />
      <TextFieldUI
        type="password"
        label="Повторить пароль"
        errorText={errors?.email && errors?.email?.message}
        register={register("password", {
          required: "Поле обязателько к заполнению",
          minLength: {
            value: 8,
            message: "Пароль должен содержать минимум 8 символов",
          },
        })}
      />
    </div>
  );
}
