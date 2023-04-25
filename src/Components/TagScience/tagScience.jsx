import React from 'react';
import { Typography } from '@mui/material';

const TagScience = ({children,className,backgroundColor}) => {



  return (
    <Typography
      className={className}
      sx={{
        background: backgroundColor,
        padding: "5px 8px",
        borderRadius: "10px",
        color: "#fff",
        fontSize: '12px',
        height: '30px'
      }}
    >
      {children}
    </Typography>
  );
};

export default TagScience;