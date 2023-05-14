import React, { useState } from "react";
import styles from "./create.module.scss";
import stepperData from "./stepperCreateData.json";
import StepperUI from "../../../Components/Stepper/Stepper";
import ButtonStepper from "../../../Components/Stepper/ButtonStepper";
import { useMatch, Outlet, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SelectUI from "../../../Components/Select/Select";
import TextFieldUI from "../../../Components/InputCustom/InputCustom";

const CreateComponent = () => {
  const [step, setStep] = useState(1);
  const { register, setValue, getValues, handleSubmit } = useForm();


  return (
    <div className={styles.sectionCreate}>
      <div style={{ maxWidth: "800px", width: "100%", margin: "0 auto" }}>
        <StepperUI steps={stepperData} activeStep={step} />
      </div>

      {useMatch(stepperData[step - 1].fullPath) ? (
        <Outlet context={{ register, setValue, getValues }} />
      ) : (
        <Navigate to={stepperData[step - 1].path} />
      )}

      <div className={styles.sectionCreateBtnNext}>
        <ButtonStepper
          setStep={setStep}
          activeStep={step}
          stepRoute={stepperData}
          buttonStepperText={{
            finallyButton: "Зарегистрируетесь",
            nextButton: "Далее",
          }}
          endStep={stepperData.length}
        />
      </div>


    </div>
  );
};

export default CreateComponent;
