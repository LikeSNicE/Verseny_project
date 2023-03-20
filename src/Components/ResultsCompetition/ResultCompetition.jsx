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
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Box
} from "@mui/material";
import React, { useState } from "react";
import styles from "./ResultCompetition.module.scss";
import TagScience from "../../Common/TagScience/tagScience";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
const ResultCompetition = () => {
  // science spans
  const namesOfScience = ["Математика", "Английский язык", "Программирование"];

  // select 
  const [nameResult, setNameResult] = useState('');
  const handleChangeNameResult = (event) => {
    setNameResult(event.target.value);
  } 

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
          <Typography>
            Конкурс по лучшему косплею по мотивам сериала "Очень странные дела"
          </Typography>
          {namesOfScience.map((name) => (
            <TagScience children={name} />
          ))}

          <Typography>Дата начало - конец : </Typography>
          <Typography variant="span">
            2 февраля 2022 - 20 февраля 2022
          </Typography>
        </div>
      </div>
      <div className={styles.resultMain}>
        <Typography fontSize="32px">
          <Icon>
            <EmojiEventsOutlinedIcon sx={{ fontSize: 25 }} />
          </Icon>
          Выбор победителя
        </Typography>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Место</TableCell>
                <TableCell>Пользователь</TableCell>
                <TableCell>Выбор победителя</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {"1 Место"}
                </TableCell>
                <TableCell align="right">
                  {
                    <div>
                      <div>
                        <Avatar src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4" />
                      </div>
                      <div>
                        <Typography>Беккожа Аян</Typography>
                        <Typography>bekkozha.ayan@mail.ru</Typography>
                      </div>
                    </div>
                  }
                </TableCell>
                <TableCell align="right">
                  <Box sx={{ maxWidth: "270px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Выбран победитель
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={nameResult}
                        label="Выбран победитель"
                        onChange={handleChangeNameResult}
                        autoWidth
                      >
                        <MenuItem value={"Никита Луценко"}>
                          Никита Луценко
                        </MenuItem>
                        <MenuItem value={20}>Беккожа Аян</MenuItem>
                        <MenuItem value={30}>No Name</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default ResultCompetition;
