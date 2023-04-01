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
  Avatar,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SelectUi from "../../Common/Select/Select";
import { Link } from "react-router-dom";
import styles from "./ModalResultCompetetition.module.scss";
import Popup from "../../Common/Popup/Popup";
import BreadCrums from "../../Common/BreadCrums/BreadCrums";

const ModalResultCompetetition = () => {
  // модалка
  const [modal, setModal] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const styleModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    height: 700,
    overflow: "auto",
  };

  // BreadCrums
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const dataBreads = [
    { id: "1", name: "Мой Файлы", path: "/to" },
    { id: "2", name: "Луценко Никита" },
  ];

  // Таблица в модалке
  const rowsModal = [
    {
      id: 1,
      name: "Main.txt",
      aboutfile: "11 Февраля 2022",
    },
    {
      id: 2,
      name: "Index.html",
      aboutfile: "11 Февраля 2022",
    },
    {
      id: 3,
      name: "Photo.png",
      aboutfile: "11 Февраля 2022",
    },
    {
      id: 4,
      name: "Photo.mp4",
      aboutfile: "11 Февраля 2022",
    },
    {
      id: 4,
      name: "Photo.mp4",
      aboutfile: "11 Февраля 2022",
    },
  ];

  // select with filtering

  const [date, setDate] = useState("");

  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
  ];

  // UI
  return (
    <div className={styles.modal}>
      <IconButton onClick={handleOpen}>
        <div className={styles.modalTopBoxIcon}>
          <RemoveRedEyeOutlinedIcon />
        </div>
      </IconButton>

      {/* Modal */}
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <div className={styles.modalTopBox}>
            <div className={styles.modalTopBoxIcon}>
              <RemoveRedEyeOutlinedIcon />
            </div>
            <div className={styles.modalTopBoxTitle}>Посмотреть</div>
          </div>
          <Divider />
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
          {/* BreadCrums */}
          <BreadCrums data={dataBreads}/>

          {/* Select */}
          <div className={styles.selectFilter}>
            <SelectUi
              option={data}
              state={setDate}
              label={"Показать"}
              name={"Аян"}
            />
          </div>

          {/* Таблица в модалке*/}
          <TableContainer className={styles.modalTableBox}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className={styles.modalTableBoxFieldName}>
                    Имя
                  </TableCell>
                  <TableCell className={styles.modalTableBoxFieldFile}>
                    О файле
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsModal.map((rowModal) => (
                  <TableRow key={rowsModal.id}>
                    <TableCell>
                      <Checkbox />

                      {rowModal.name}
                    </TableCell>
                    <TableCell>{rowModal.aboutfile}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* modal Popup */}
          <Popup />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalResultCompetetition;
