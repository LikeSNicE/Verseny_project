import React from "react";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import { Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

export default function ButtonStepper({
  stepRoute,
  activeStep = 1,
  setStep,
  endStep,
  buttonStepperText,
}) {
  let indexStep = activeStep - 1;

  if (activeStep === 1)
    return (
      <Link
        to={stepRoute[indexStep + 1].path}
        style={{ textDecoration: "none" }}
      >
        <ButtonCustom
          style={{ width: "100%" }}
          endIcon={<ArrowForwardIcon />}
          color="primary"
          onClick={() => setStep(activeStep + 1)}
        >
          {buttonStepperText.nextButton}
        </ButtonCustom>
      </Link>
    );
  if (activeStep === endStep)
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Link
            to={stepRoute[indexStep - 1].path}
            style={{ textDecoration: "none" }}
          >
            <ButtonCustom
              style={{ width: "100%" }}
              variant="outlined"
              onClick={() => setStep(activeStep - 1)}
            >
              Назад
            </ButtonCustom>
          </Link>
        </Grid>
        <Grid item xs={8}>
          <ButtonCustom style={{ width: "100%" }} color="primary">
            {buttonStepperText.finallyButton}
          </ButtonCustom>
        </Grid>
      </Grid>
    );
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Link
          to={stepRoute[indexStep - 1].path}
          style={{ textDecoration: "none" }}
        >
          <ButtonCustom
            style={{ width: "100%" }}
            variant="outlined"
            onClick={() => setStep(activeStep - 1)}
          >
            Назад
          </ButtonCustom>
        </Link>
      </Grid>
      <Grid item xs={8}>
        <Link
          to={stepRoute[indexStep + 1].path}
          style={{ textDecoration: "none" }}
        >
          <ButtonCustom
            style={{ width: "100%" }}
            endIcon={<ArrowForwardIcon />}
            color="primary"
            onClick={() => setStep(activeStep + 1)}
          >
            {buttonStepperText.nextButton}
          </ButtonCustom>
        </Link>
      </Grid>
    </Grid>
  );
}
