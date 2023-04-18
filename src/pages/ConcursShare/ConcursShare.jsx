import {
  Typography
} from "@mui/material";

import React, { useState } from "react";
import styles from "./ConcursShare.module.scss";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";


import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

// mychannel/concurs-share/{id}
import SelectUi from "../../Components/Select/Select";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { Link, Route, Routes } from "react-router-dom";
import ConcursSharePhotos from "./ConcursSharePhotos/ConcursSharePhotos";
import ConcursShareFiles from "./ConcursShareFiles/ConcursShareFiles";
import ConcursShareTop from "./ConcursShareTop/ConcursShareTop";



// component
const ConcursShare = () => {
 
  // View
  const arrayOption = [
    { id: 1, name: "По дате" },
    { id: 2, name: "По количеству" },
  ];

  const [date, setDate] = useState();

  // ui
  return (
    <div className={styles.result}>
    
      <ConcursShareTop/>

      <div className={styles.member}>
        <Typography className={styles.memberMainTitle}>Участники</Typography>
        <Typography className={styles.memberTypeParticipation}>
          Тип участия :{" "}
          {<InsertDriveFileOutlinedIcon sx={{ verticalAlign: "bottom" }} />}{" "}
          Файлы{" "}
        </Typography>
        <Typography className={styles.memberCount}>
          {<Diversity3OutlinedIcon sx={{ verticalAlign: "bottom" }} />} 4
          Участников
        </Typography>
        <div className={styles.memberBox}>
          <div className={styles.memberBoxLeft}>
            <SelectUi option={arrayOption} state={setDate} label={"Показать"} />
          </div>
          <div className={styles.memberBoxRight}>
            <ButtonCustom
              className={styles.memberBoxRightLinkChosenWinner}
              startIcon={<EmojiEventsOutlinedIcon />}
            >
              <Link to={"/mychannel/concurs-share/concurs-winner/id"}>
                Выбрать Победителя
              </Link>
            </ButtonCustom>
          </div>
        </div>
        <Routes>
          <Route path="files" element={<ConcursShareFiles />} />
          <Route path="photos" element={<ConcursSharePhotos />} />
        </Routes>
      </div>
    </div>
  );
};

export default ConcursShare;


// image 