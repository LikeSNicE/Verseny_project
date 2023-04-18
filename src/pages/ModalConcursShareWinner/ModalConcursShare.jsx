import React, { useState } from "react";
import {
  IconButton,
  Modal,
  Box,
  Divider,
  Button,
  Breadcrumbs,
  Checkbox,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  Avatar,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SelectUi from "../../Components/Select/Select";
import styles from "./ModalConcursShare.module.scss";
import Popup from "../../Components/Popup/Popup";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import ModalCustom from "../../Components/Modal/Modal";
import TableUI from "../../Common/Table/Table";
import { headData,dataTable } from "./ModalConcursShareData";
import {useForm} from "react-hook-form";
import HandleCheckBox from "../../Common/Table/HandleCheckBox/HandleCheckBox";

const ModalConcursShare = () => {
  // модалка
  const [modal, setModal] = useState(false);
  // BreadCrums
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const dataBreads = [
    { id: "1", name: "Мой Файлы", path: "/to" },
    { id: "2", name: "Луценко Никита" },
  ];

  

    const [filePath, setFilePath] = useState([]);

    const { control, reset, handleSubmit } = useForm();

    const clear = () => {
      reset();
      setFilePath([]);
    };

  // select with filtering

  const [date, setDate] = useState("");

  const arrayOption = [
    { id: 1, name: "По дате" },
    { id: 2, name: "По количеству" },
  ];

  // UI
  return (
    <div className={styles.modal}>
      <ModalCustom
        icon={<RemoveRedEyeOutlinedIcon />}
        iconStyles={styles.modalTopBoxIcon}
        open={modal}
        setIsOpen={setModal}
        text="Посмотреть"
        btnStyles={styles.modalTopBoxIcon}
        btnLabel={<RemoveRedEyeOutlinedIcon />}
        heightModal="700px"
      >
        <div className={styles.modalTopUserBox}>
          <div className={styles.modalTopUserBoxLeft}>
            <div>
              {" "}
              <Avatar src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4" />
            </div>
            <div className={styles.modalTopUserBoxLeftTextInfo}>
              <p>Луценко Никита</p>
              <p>bekkozha.ayan@mail.ru</p>
            </div>
          </div>
          <div className={styles.modalTopUserBoxRight}>
            <div className={styles.modalTopUserBoxRightDownloadBtn}>
              <Button
                variant="contained"
                component="label"
                sx={{
                  background: "#7272D8",
                  "&:hover": {
                    background: "#7272D8",
                  },
                }}
              >
                <FileDownloadOutlinedIcon />
                <input hidden download />
              </Button>
            </div>
            <div className={styles.modalTopUserBoxRightDeleteBtn}>
              <Button
                variant="contained"
                component="label"
                sx={{
                  background: "#E8533F",
                  "&:hover": {
                    background: "#E8533F",
                  },
                }}
              >
                <DeleteOutlineOutlinedIcon />
              </Button>
            </div>
          </div>
        </div>

        <BreadCrums data={dataBreads} />

        <div className={styles.selectFilter}>
          <SelectUi option={arrayOption} state={setDate} label={"Показать"} />
        </div>

        <form
          onChange={(e) =>
            handleSubmit(setFilePath(HandleCheckBox(e, filePath)))
          }
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
      </ModalCustom>
    </div>
  );
};

export default ModalConcursShare;
