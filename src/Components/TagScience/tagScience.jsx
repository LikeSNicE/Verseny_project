import React from "react";
import { Typography } from "@mui/material";

const TagScience = ({ children}) => {
  return (
    <Typography
      style={{
        padding: "5px 8px",
        borderRadius: "10px",
        color: "#fff",
        fontSize: "12px",
        height: "30px",
        width: "150px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </Typography>
  );
};

export default TagScience;
