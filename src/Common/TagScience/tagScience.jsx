import React from 'react';
import { Titles } from '../../theme';
import { tagsColors } from '../../Components/styles/vars-colors/varsColors';
import { Typography } from '@mui/material';

const TagScience = ({children}) => {

  const {h6} = Titles;

  return (
    <Typography
      fontSize={h6}
      sx={{
        background: tagsColors.four,
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