import React from "react";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import { TextField, ToggleButton, ToggleButtonGroup,Button } from "@mui/material";
import styles from "./settingChannel.module.scss";
const SettingChannel = () => {
  // Details left
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <div className={styles.channelSettingLeft}>
      <div className={styles.channelSettingLeftTitle}>
        <div className={styles.channelSettingLeftTitleIcon}>
          {<AirplayOutlinedIcon />}
        </div>
        <div className={styles.channelSettingLeftTitleSubtitle}>Канал</div>
      </div>

      <div className={styles.channelSettingLeftField}>
        <div className={styles.channelSettingLeftFieldName}>Никнеим :</div>
        <div className={styles.channelSettingLeftFieldInput}>
          <TextField
            label="Введите никнеим"
            fullWidth
            type="search"
            placeholder="Введите никнеим"
          />
        </div>
      </div>

      <h4 className={styles.channelSettingLeftTitleDetails}>Подробности:</h4>

      <div className={styles.channelSettingLeftDetails}>
        <div>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
          >
            <ToggleButton
              className={
                styles.channelSettingLeftDetailsBtn +
                " " +
                styles.channelSettingLeftDetailsBtnBold
              }
              value="bold"
              aria-label="bold"
            >
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton
              className={
                styles.channelSettingLeftDetailsBtn +
                " " +
                styles.channelSettingLeftDetailsBtnItalic
              }
              value="italic"
              aria-label="italic"
            >
              <FormatItalicIcon />
            </ToggleButton>
            <ToggleButton
              className={
                styles.channelSettingLeftDetailsBtn +
                " " +
                styles.channelSettingLeftDetailsBtnUnderlined
              }
              value="underlined"
              aria-label="underlined"
            >
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
      <textarea
        placeholder="Введите подробности"
        className={styles.channelSettingLeftTextArea}
      ></textarea>
      <Button
        variant="contained"
        sx={{
          display: "block",
          mt: "10px",
          background: "#9294C9",
          "&:hover": {
            background: "#9294C9",
          },
        }}
      >
        Редактировать
      </Button>
    </div>
  );
};

export default SettingChannel;
