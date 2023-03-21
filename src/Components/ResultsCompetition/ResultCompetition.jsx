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
  TextField,
  Autocomplete,
  IconButton,
} from "@mui/material";
import { styled, lighten, darken } from "@mui/system";
import React from "react";
import styles from "./ResultCompetition.module.scss";
import TagScience from "../../Common/TagScience/tagScience";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { top100Films } from "./resultData";

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

  // поиск поильзователя
const GroupItems = styled("ul")({
  padding: 0,
});

const createData = (winPlace,userPhoto,userName,userEmail,chosenUser,hideSearch) => {
  return { winPlace, userPhoto, userName, userEmail,  };
} 

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

const ResultCompetition = () => {
  // science spans
  const namesOfScience = [
    {
    name: "Математика",
    backgroundColor: 'orange'
    },
    {
    name: "Английский язык",
    backgroundColor: 'red'
    },
    {
    name: "Физика",
    backgroundColor: 'green'
    },
    {
    name: "Геометрия",
    backgroundColor: 'purple'
    }
  ]



  // поиск поильзователя
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...option,
    };
  });

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
                    <IconButton>
                      <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ResultCompetition;
