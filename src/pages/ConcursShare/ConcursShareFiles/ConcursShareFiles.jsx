import React,{useState} from "react";
import { useForm } from "react-hook-form";
import HandleCheckBox from "../../../Common/Table/HandleCheckBox/HandleCheckBox";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import BreadCrums from "../../../Components/BreadCrums/BreadCrums";
import Popup from "../../../Components/Popup/Popup";
import TableUI from "../../../Common/Table/Table";
import {Box,Typography,Button} from '@mui/material';

const ConcursShareFiles = () => {

const dataTable = [
  [
    {
      CheckBox: "/src/Беккожа Аян",
      CheckBoxId: "CheckBox1",
    },
    {
      File: {
        type: "folder",
        name: "Беккожа Аян",
        link: "/mychannel/concurs-share/id/user/id",
      },
    },
    {
      AboutFile: ["11 февраля 2023", "8,45 мб"],
    },
    {
      Avatar: {
        photo:
          "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139%22,",
        alt: "logo",
        name: "Беккожа Аян",
        email: "bekkozha.ayan@mail.ru",
      },
    },
  ],
  [
    {
      CheckBox: "/src/Луценко Никита",
      CheckBoxId: "CheckBox2",
    },
    {
      File: {
        type: "folder",
        name: "Луценко Никита",
        link: "/mychannel/concurs-share/id/user/id",
      },
    },
    {
      AboutFile: ["12 февраля 2023", "6,45 мб"],
    },
    {
      Avatar: {
        photo:
          "https://images-ext-1.discordapp.net/external/_DY1anSP2XlAmXYBaMmEcmqza9Wa_yVtbdZy4tBHvoU/%3Fs%3D400%26u%3D6c92f6fc049c598f01fa6554b575c74dbf789e07%26v%3D4%2522%2C/https/avatars.githubusercontent.com/u/85344443",
        alt: "logo",
        name: "Луценко Никита",
        email: "nik.luzenko@mail.ru",
      },
    },
  ],
];
const head = ["", "Имя", "О файле", "Пользователь"];

  const dataBreads = [
    {
      id: "1",
      name: "Мои Файлы",
      path: "/mychannel/concurs-share/id/files",
    },
  ];

  // new Table
  const [filePath, setFilePath] = useState([]);

  const { control, reset, handleSubmit } = useForm();

  const clear = () => {
    reset();
    setFilePath([]);
  };

  return (
    <div>
      <BreadCrums data={dataBreads} />

      <form
        onChange={(e) => handleSubmit(setFilePath(HandleCheckBox(e, filePath)))}
      >
        <div className="">
          <TableUI data={dataTable} head={head} control={control} />
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

export default ConcursShareFiles;
