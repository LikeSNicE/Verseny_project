import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg";
import styles from "./Signin.module.scss";
import StepperUI from "../../Components/Stepper/Stepper";
import ButtonStepper from "../../Components/Stepper/ButtonStepper";
import { Outlet, Navigate, useMatch } from "react-router-dom";
import { useForm } from "react-hook-form";

const stepRoute = [
  {
    label: "Профиль",
    path: "user",
    fullPath: "signin/user",
  },
  {
    label: "Канал",
    path: "channel",
    fullPath: "signin/channel",
  },
];

export default function Signin() {
  const [step, setStep] = useState(1);
  const { register, setValue, getValues, handleSubmit } = useForm({
    mode: 'onBlur'
  });
  const [valid, setValid] = useState(false);
  const onSubmit = (data) => {
    //console.log(data.avatar);
    Object.values(data).map((value) => console.log(value ? true : false));
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div className={styles.containerSignin}>
        <div className={styles.containerSigninLogo}>
          <Logo />
          <h2>Создание аккаунта</h2>
        </div>
        <StepperUI activeStep={step} steps={stepRoute} />

        <form onChange={handleSubmit(onSubmit)}>
          {useMatch(stepRoute[step - 1].fullPath) ? (
            <Outlet context={{ register, setValue, getValues }} />
          ) : (
            <Navigate to={stepRoute[step - 1].path} />
          )}
        </form>

        <ButtonStepper
          stepRoute={stepRoute}
          activeStep={step}
          setStep={setStep}
          endStep={stepRoute.length}
          buttonStepperText={{
            finallyButton: "Зарегистрировать",
            nextButton: "Далее",
          }}
        />
      </div>
    </div>
  );
}
