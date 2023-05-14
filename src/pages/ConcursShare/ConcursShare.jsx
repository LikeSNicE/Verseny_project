import {
  Typography
} from "@mui/material";
import React, { useState } from "react";
import styles from "./ConcursShare.module.scss";
import SelectUi from "../../Components/Select/Select";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import { Link} from "react-router-dom";
import ConcursSharePhotos from "./ConcursSharePhotos/ConcursSharePhotos";
import ConcursShareFiles from "./ConcursShareFiles/ConcursShareFiles";
import ConcursShareTop from "./ConcursShareTop/ConcursShareTop";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import * as Muicon from "@mui/icons-material";


// component
const ConcursShare = () => {

   const arraySelectOption = [
     { label: "По дате", value: "1" },
     { label: "По количеству", value: "2" },
   ];
   const [date, setDate] = useState("");

   const DataTabs = [
     {
       id: 1,
       label: "Файлы",
       value: <ConcursShareFiles />,
     },
     {
       id: 2,
       label: "Фото",
       value: <ConcursSharePhotos />,
     },
   ];

   const EmojiEventsOutlinedIcon = Muicon["EmojiEventsOutlined"];
   const InsertDriveFileOutlinedIcon = Muicon["InsertDriveFileOutlined"];
   const PeopleOutlinedIcon = Muicon["PeopleOutlined"];


  //  import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

  //  import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
  //  import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";


  // ui
  return (
    <div className={styles.result}>
      <ConcursShareTop />

      <div className={styles.member}>
        <Typography className={styles.memberMainTitle}>Участники</Typography>
        <Typography className={styles.memberTypeParticipation}>
          Тип участия :{" "}
          {<InsertDriveFileOutlinedIcon sx={{ verticalAlign: "bottom" }} />}{" "}
          Файлы{" "}
        </Typography>
        <Typography className={styles.memberCount}>
          {<PeopleOutlinedIcon sx={{ verticalAlign: "bottom" }} />} 4
          Участников
        </Typography>
        <div className={styles.memberBox}>
          <div className={styles.memberBoxLeft}>
            <SelectUi
              option={arraySelectOption}
              state={setDate}
              label={"Показать"}
            />
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
      
        <div className={styles.memberTabs}>
          <TabsCustom dataTabs={DataTabs}/>
        </div>
      </div>
    </div>
  );
};

export default ConcursShare;


// image 