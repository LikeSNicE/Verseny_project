import React,{useState} from "react";
import styles from "./Select.module.scss";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function SelectUI(props) {

  const { option, state, label, name,placeholder} = props;
  const [value,setValue] = useState('По дате');

  const handleChange = (e) => {
    setValue(e.target.value);
    state(e.target.value);
  }

  let classLabel = label ? styles.RadiusNone : "";
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {label ? <div className={styles.labelSelect}>{label}</div> : ""}
      <Select
        value={value}
        sx={{
          fontFamily: "Comfortaa",
          color: "#7272D8",
          fontWeight: "bold",
        }}
        name={name}
        className={styles.MySelect  + " " + classLabel}
        onChange={(e) => handleChange(e)}
        placeholder={placeholder}
      >
        {option.map((value,index) => (
          <MenuItem key={index} sx={{ fontFamily: "Comfortaa" }} value={value.name}>
            {value.name}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
}

export default SelectUI;
