import React from "react";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import InputCustom from "../../Components/InputCustom/InputCustom";
import styles from "./settingChannel.module.scss";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import ButtonGroupCustom from "../../Components/ButtonGroupCustom/ButtonGroupCustom";

const SettingChannel = () => {
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
          <InputCustom label="Никнейм" />
        </div>
      </div>

      <h4 className={styles.channelSettingLeftTitleDetails}>Подробности:</h4>

      <textarea
        placeholder="Введите подробности"
        className={styles.channelSettingLeftTextArea}
      ></textarea>

      <ButtonCustom className={styles.channelSettingLeftBtn}>
        Редактировать
      </ButtonCustom>
    </div>
  );
};

export default SettingChannel;
