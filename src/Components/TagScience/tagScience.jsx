import React from 'react';
import { Titles } from '../../theme';
import { Typography } from '@mui/material';

const TagScience = ({children,className,backgroundColor}) => {

  const {h6} = Titles;

  return (
    <Typography
      className={className}
      fontSize={h6}
      sx={{
        background: backgroundColor,
        padding: "5px 8px",
        borderRadius: "10px",
        color: "#fff",
        mt: "10px",
      }}
    >
      {children}
    </Typography>
  );
};

export default TagScience;