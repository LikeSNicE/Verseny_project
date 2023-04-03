import {
  Typography,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Checkbox,
  TextField,
  Autocomplete,
} from "@mui/material";
import { styled, lighten, darken } from "@mui/system";
import React, { useState } from "react";
import styles from "./ResultCompetition.module.scss";
import TagScience from "../../Components/TagScience/tagScience";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { top100Films } from "./resultData";
import ModalResultCompetetition from "./ModalResultCompetetition";

import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

// mychannel/concurs-share/{id}
import SelectUi from "../../Components/Select/Select";
import { ButtonIconText } from "../../Components/ButtonIconText/ButtonIconText";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import BreadCrums from "../../Components/BreadCrums/BreadCrums";
import Popup from '../../Components/Popup/Popup';
import TableСustom from "../../Common/Table/Table";
import TableUI from "../../Common/Table/Table";
import SelectComboBox from "../../Common/Table/SelectComboBox/SelectComboBox";

const dataBreads = [
  { id: "1", name: "Мои Файлы", path: "/to" },
  // { id: "2", name: "Луценко Никита" },
];

// const createDataShare = (id, userName, date, userPhoto, userEmail) => {
//   return { id, userName, date, userPhoto, userEmail };
// };

// const shareRows = [
//   createDataShare(
//     "1",
//     "Беккожа Аян",
//     "11 февраля 2023",
//     "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139",
//     "bekkozha.ayan@mail.ru"
//   ),
//   createDataShare(
//     "2",
//     "Луценко Никита",
//     "11 февраля 2023",
//     "https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4",
//     "nik.luzenko@mail.ru"
//   ),
// ];

// const columnDataShare = [
//   { name: "Имя" },
//   { name: "О файле" },
//   { name: "Пользователь" },
// ];

const dataTable = [
  [
    {
      File: {
        type: "folder",
        name: "Беккожа Аян",
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
];
const head = ["Имя", "О файле", "Пользователь"];

// поиск поильзователя
const GroupHeader = styled("div")(({ theme }) => ({
  position: "sticky",
  top: "-8px",
  padding: "4px 10px",
  color: theme.palette.primary.main,
  backgroundColor:
    theme.palette.mode === "light"
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled("ul")({
  padding: 0,
});

const options = top100Films.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
    ...option,
  };
});

// Для таблицы
const createData = (winPlace, userPhoto, userName, userEmail) => {
  return { winPlace, userPhoto, userName, userEmail };
};

// table data
const rows = [
  createData(
    "1 Место",
    "https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4",
    "Луценко Никита",
    "nik.luzenko@mail.ru"
  ),
  createData(
    "2 Место",
    "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139",
    "Беккожа Аян",
    "bekkozha.ayan@mail.ru"
  ),
];

// component
const ResultCompetition = () => {
  // science data spans
  const namesOfScience = [
    {
      name: "Математика",
      backgroundColor: "orange",
    },
    {
      name: "Английский язык",
      backgroundColor: "red",
    },
    {
      name: "Физика",
      backgroundColor: "green",
    },
    {
      name: "Геометрия",
      backgroundColor: "purple",
    },
    {
      name: "Астнавтика dsadasdasddasdasdasd",
      backgroundColor: "blueviolet",
    },
  ];

  // View
  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 },
  ];

  const [date, setDate] = useState();

  // ui
  return (
    <div className={styles.result}>
      <div className={styles.resultTop}>
        <div className={styles.resultTopLeft}>
          <img
            src="https://bgr.com/wp-content/uploads/2022/02/Stranger-Things-4-1.jpg?quality=82&strip=all"
            alt="Poster of Competition"
          />
        </div>
        <div className={styles.resultTopRight}>
          <Typography className={styles.resultTopRightTitle}>
            Конкурс по лучшему косплею по мотивам сериала "Очень странные дела"
          </Typography>
          <div className={styles.resultTopRightGrid}>
            {namesOfScience.map((name) => (
              <TagScience
                key={name.name}
                className={styles.resultTopRightScience}
                children={name.name}
                backgroundColor={name.backgroundColor}
              />
            ))}
          </div>

          <Typography className={styles.resultTopRightTitleDate}>
            Дата начало - конец :{" "}
          </Typography>
          <Typography className={styles.resultTopRightDate} variant="span">
            2 февраля 2022 - 20 февраля 2022
          </Typography>
        </div>
      </div>
{/* 
      <div className={styles.resultMain}>
        <Typography fontSize="32px" marginTop="50px">
          <Icon>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 25, mr: "10px" }} />
          </Icon>
          Выбор победителя
        </Typography> 

         <TableContainer className={styles.resultMainTable} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Место</TableCell>
                <TableCell>Пользователь</TableCell>
                <TableCell>Выбор победителя</TableCell>
                <TableCell>Скрыть победителя</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.winPlace}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.winPlace}
                  </TableCell>

                  <TableCell align="right">
                    {
                      <div className={styles.resultMainTableAvatarBox}>
                        <div className={styles.resultMainTableAvatarBoxLeft}>
                          <Avatar src={row.userPhoto} />
                        </div>
                        <div className={styles.resultMainTableAvatarBoxRight}>
                          <Typography>{row.userName}</Typography>
                          <Typography>{row.userEmail}</Typography>
                        </div>
                      </div>
                    }
                  </TableCell>
                  <TableCell>
                    <Autocomplete
                      id="grouped-demo"
                      options={options.sort(
                        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                      )}
                      groupBy={(option) => option.firstLetter}
                      getOptionLabel={(option) => option.title}
                      sx={{ width: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label="Выбор участника" />
                      )}
                      renderGroup={(params) => (
                        <li key={params.key}>
                          <GroupHeader>{params.group}</GroupHeader>
                          <GroupItems>{params.children}</GroupItems>
                        </li>
                      )}
                    />
                  </TableCell>
                  <TableCell>
                    <ModalResultCompetetition />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

                      */}

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
            <SelectUi
              option={data}
              state={setDate}
              label={"Показать"}
              name={"Аян"}
            />
          </div>
          <div className={styles.memberBoxRight}>
            <ButtonIconText
              startIcon={<EmojiEventsOutlinedIcon />}
              background={"#7272D8"}
              hoverBackground={"#7272D8"}
              children={"Выбрать Победителя"}
              className={styles.memberBoxRightLinkChosenWinner}
            />
          </div>
        </div> 

        <BreadCrums data={dataBreads} />

        {/* <TableContainer className={styles.concursShareTable} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Имя</TableCell>
                <TableCell>О файле</TableCell>
                <TableCell>Пользователь</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shareRows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <div className={styles.concursShareTableBoxName}>
                      <img
                        className={styles.concursShareTableBoxNameImg}
                        src="https://img.freepik.com/free-icon/folder_318-315155.jpg?size=338&ext=jpg"
                        alt="folder icon"
                      />
                      <div className={styles.concursShareTableBoxNameText}>
                        {row.userName}
                      </div>
                    </div>
                  </TableCell>

                  <TableCell>{row.date}</TableCell>
                  <TableCell>
                    {
                      <div className={styles.resultMainTableAvatarBox}>
                        <div className={styles.resultMainTableAvatarBoxLeft}>
                          <Avatar src={row.userPhoto} />
                        </div>
                        <div className={styles.resultMainTableAvatarBoxRight}>
                          <Typography>{row.userName}</Typography>
                          <Typography>{row.userEmail}</Typography>
                        </div>
                      </div>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer> */}

        {/* <TableСustom columnData={columnDataShare} /> */}

        <TableUI head={head} data={dataTable}  isCheckBox={true}/>


        {/* <Popup /> */}
      </div>
    </div>
  );
};

export default ResultCompetition;
