import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        color: "#7272d8",
        "&.Mui-checked": {
          color: "#7272d8",
        },
      }}
      disableRipple
      {...props}
    />
  );
}

export default function RadioButtonCustom({ radio, formLabel, row = true,className }) {
  return (
    <FormControl className={className}>
      <p>{formLabel}</p>
      <RadioGroup
        row={row}
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        {radio.map((valueRadio, index) => (
          <FormControlLabel
            key={index}
            value={valueRadio}
            control={<BpRadio />}
            label={valueRadio}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
