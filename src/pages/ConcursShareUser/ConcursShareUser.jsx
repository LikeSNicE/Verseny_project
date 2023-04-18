import React, { useState } from "react";
import styles from "./ConcursShareUser.module.scss";
import ConcursShareTop from "../ConcursShare/ConcursShareTop/ConcursShareTop";
import { Avatar,Typography,Button } from "@mui/material";
import SelectUi from "../../Components/Select/Select";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import { Link } from "react-router-dom";
import { headData, dataTable } from "./ConcursShareUserData";
import TableUI from "../../Common/Table/Table";
import { useForm } from "react-hook-form";
import HandleCheckBox from "../../Common/Table/HandleCheckBox/HandleCheckBox";
import Popup from "../../Components/Popup/Popup";

const ConcursShareUser = (props) => {
  const { typeIcon } = props;
  const arrayOption = [
    { id: 1, name: "По дате" },
    { id: 2, name: "По количеству" },
  ];
  const [date, setDate] = useState();

  const dataBreads = [
    { id: "1", name: "Мой Файлы", path: "/mychannel/concurs-share/id/files" },
    { id: "2", name: "Луценко Никита" },
  ];

  const [filePath, setFilePath] = useState([]);
  const { control, reset, handleSubmit } = useForm();
  const clear = () => {
    reset();
    setFilePath([]);
  };

  return (
    <div className={styles.sectionConcursShareUser}>
      <ConcursShareTop />
      <div className={styles.sectionConcursShareUserTitle}>Участник</div>

      <div className={styles.sectionConcursShareUserBlock}>
        <div className={styles.sectionConcursShareUserBlockInfo}>
          <Avatar
            className={styles.sectionConcursShareUserBlockInfoImg}
            src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"
            alt="user photo"
          />
          <div className={styles.sectionConcursShareUserBlockInfoName}>
            Беккожа Аян
          </div>
          <div className={styles.sectionConcursShareUserBlockInfoEmail}>
            bekkozha.ayan@mail.ru
          </div>
        </div>
        <div className={styles.sectionConcursShareUserBlockUpload}>
          <div className={styles.sectionConcursShareUserBlockUploadDate}>
            <span>Дата загрузки:</span> 11 февраля 2022
          </div>
          <div
            className={styles.sectionConcursShareUserBlockUploadTypeParticipate}
          >
            Тип участия : {typeIcon}
          </div>
          <div className={styles.sectionConcursShareUserBlockUploadBtns}>
            <ButtonCustom
              className={styles.sectionConcursShareUserBlockUploadBtnFile}
              startIcon={<FileDownloadOutlinedIcon />}
            >
              Скачать
            </ButtonCustom>
            <ButtonCustom
              className={styles.sectionConcursShareUserUploadBtnDelete}
              startIcon={<DeleteOutlineOutlinedIcon />}
            >
              Удалить
            </ButtonCustom>
          </div>
        </div>
      </div>

      <div className={styles.sectionConcursShareUserChoose}>
        <div className={styles.sectionConcursShareUserSelect}>
          <SelectUi option={arrayOption} state={setDate} label={"Показать"} />
        </div>
        <div className={styles.sectionConcursShareUserChooseBtn}>
          <ButtonCustom startIcon={<EmojiEventsOutlinedIcon />}>
            <Link to="/mychannel/concurs-share/concurs-winner/id">
              Выбрать Победителя
            </Link>
          </ButtonCustom>
        </div>
      </div>

      <BreadCrums data={dataBreads} />

        <form
        onChange={(e) => handleSubmit(setFilePath(HandleCheckBox(e, filePath)))}
      >
        <div className="">
          <TableUI data={dataTable} head={headData} control={control} />
        </div>
      </form>
      <Popup data={filePath} setData={clear}>
        <Button
          sx={{
            textTransform: "none",
            alignItems: "center",
            color: "#4A4A4E",
            margin: "0 10px",
          }}
          startIcon={<FileDownloadOutlinedIcon />}
        >
          <Typography>Скачать</Typography>
        </Button>
        <Button
          sx={{
            textTransform: "none",
            alignItems: "center",
            color: "#4A4A4E",
            margin: "0 10px",
          }}
          startIcon={<DeleteOutlineOutlinedIcon />}
        >
          <Typography>Удалить</Typography>
        </Button>
      </Popup>
    </div>
  );
};

export default ConcursShareUser;
