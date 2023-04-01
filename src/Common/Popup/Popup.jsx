import React from 'react';
import styles from './Popup.module.scss'
import { ButtonIconText } from "../../Common/ButtonIconText/ButtonIconText";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import { Button } from '@mui/material';
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const Popup = () => {
  return (
    <div className={styles.Popup}>
      <div className={styles.PopupRemoveAllIcon}>
        <Button>
          <CloseOutlinedIcon />
        </Button>
      </div>
      <div className={styles.PopupDownload}>
        <ButtonIconText
          startIcon={<DownloadDoneOutlinedIcon />}
          background={"#696969"}
          hoverBackground={"#696969"}
          children={"Cкачать"}
        />
      </div>
      <div className={styles.PopupDelete}>
        <ButtonIconText
          startIcon={<DeleteOutlineOutlinedIcon />}
          background={"#E8533F"}
          hoverBackground={"#E8533F"}
          children={"Удалить"}
        />
      </div>
    </div>
  );
};

export default Popup;