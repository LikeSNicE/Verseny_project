import { TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";

export default function TextFieldUI({
  label,
  variant,
  id,
  style,
  type = "text",
}) {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#7272D8",
    },
    "& label.MuiFormLabel-root": {
      fontWeight: "bold",
      fontSize: "16px",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "2px solid #B4B4B5",
        color: "#B4B4B5",
        borderRadius: "10px",
        height: "50px",
      },
      "&:hover fieldset": {
        borderColor: "#7272D8",
        color: "#7272D8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#7272D8",
      },
    },
    "& .css-1g24dm6-MuiInputBase-input-MuiOutlinedInput-input": {
      padding: "5px 10px",
    },
    "& .css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input":{
      padding: '10px'
    },
    "& .css-1o6kl88-MuiInputBase-input-MuiOutlinedInput-input":{
      padding: '10px'
    } 
  });
  return (
    <CssTextField
      id={id}
      type={type}
      style={{ ...style, width: "100%" }}
      variant={variant}
      label={label}
      size="small"
    />
  );
}
