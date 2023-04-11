import React from "react";
import { Button, styled } from "@mui/material";

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  padding: "10px",
  borderRadius: "10px",
  lineHeight: 1.5,
  backgroundColor: "black",
  color: "white",
  "&:hover": {
    backgroundColor: "#303030",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#ADADD7",
  },

  //Outlined
  "&.MuiButton-outlined": {
    border: "2px solid black",
    background: "none",
    color: "black",
  },
  "&.MuiButton-outlined:hover": {
    background: "black",
    color: "#fff",
  },

  "&.MuiButton-outlinedError": {
    border: "2px solid #E8533F",
    color: "#E8533F",
  },
  "&.MuiButton-outlinedError:hover": {
    background: "#E8533F",
    color: "#fff",
  },

  "&.MuiButton-outlinedWarning": {
    border: "2px solid #F8B84A",
    color: "#F8B84A",
  },
  "&.MuiButton-outlinedWarning:hover": {
    background: "#F8B84A",
    color: "#fff",
  },

  //Contained
  "&.MuiButton-contained": {
    background: "black",
    color: "#fff",
  },
  "&.MuiButton-containedPrimary": {
    background: "#7272D8",
    color: "#fff",
  },
  "&.MuiButton-containedError": {
    background: "#E8533F",
    color: "#fff",
  },
  "&.MuiButton-containedWarning": {
    background: "#F8B84A",
    color: "#fff",
  },
});

function ButtonCustom({
  children,
  variant = "contained",
  color,
  startIcon,
  endIcon,
  onClick,
  className,
}) {
  return (
    <BootstrapButton
      
      className={className}
      variant={variant}
      color={color}
      startIcon={startIcon}
      onClick={onClick}
      endIcon={endIcon}
    >
      {children}
    </BootstrapButton>
  );
}

export default ButtonCustom;
