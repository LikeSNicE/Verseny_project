import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Tabs,
  Tab,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { tagsColors } from "../styles/vars-colors/varsColors";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import { Titles } from "../../theme";

const BoxMainStyled = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  mt: "20px",
});

const BoxMainLeft = styled(Box)({
  width: "300px",
  padding: "30px",
  background: "#F9F9F9",
  borderRadius: "10px",
});

const BoxMainRight = styled(Box)({
  width: "100%",
  borderRadius: "10px",
  background: "",
  marginLeft: "15px",
});

const BoxMainRightTop = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#F9F9F9",
  padding: "40px 15px",
  borderRadius: "10px",
  marginBottom: "15px",
  rowGap: "20px",
});

const BoxMainRightBottom = styled(Box)({
  marginTop: "15px",
  background: "#F9F9F9",
  padding: "30px 25px",
});

const TypographySearch = styled(Typography)({
  fontSize: "16px",
  margin: "15px 0",
});

const ListItemStyled = (props) => {
  const {info,infoValue} = props;
  return (
    <ListItem>
      <ListItemText primary={`${info} : ${infoValue}`}/>
    </ListItem>
  );
};

const ProfileDetails = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {h1,h2} = Titles;

  return (
    <BoxMainStyled
      sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: "20px",
      }}
    >
      <BoxMainLeft>
        <Avatar
          src="https://i.pinimg.com/originals/90/09/79/900979ebb3fe7ed2b6c0436a67ef02c3.jpg"
          variant="square"
          sx={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            mb: "10px",
          }}
        ></Avatar>

        <Button
          variant="contained"
          component="label"
          sx={{
            background: tagsColors.four,
            mb: "40px",
          }}
        >
          <EditIcon />
          <input type="file" hidden />
        </Button>

        <TypographySearch
          sx={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
          variant="h6"
          component="div"
        >
          Личная Информация
        </TypographySearch>

        <Divider />

        <List>
          <ListItemStyled info="Имя" infoValue="Никита" />
          <ListItemStyled info="Фамилия" infoValue="Луценко" />
          <ListItemStyled info="Пол" infoValue="Мужской" />
          <ListItemStyled
            info="Почта" infoValue="bekkozha.ayan@mail.ru"
          />
        </List>
      </BoxMainLeft>

      <BoxMainRight>
        <BoxMainRightTop>
          <Box>
            <Typography
              sx={{
                fontSize: h1,
                fontWeight: "700",
                color: "#000",
              }}
            >
              Луценко Никита
            </Typography>
            <Typography
              sx={{
                fontSize: h2,
                fontWeight: "400",
                color: "#4A4A4E",
              }}
            >
              Дата создание аккаунта: 10.01.2023
            </Typography>
            <Typography
              sx={{
                fontSize: h2,
                fontWeight: "400",
                color: "#4A4A4E",
              }}
            >
              Роль: Организатор
            </Typography>
          </Box>

          <Box>
            <Button
              startIcon={<ExitToAppIcon />}
              sx={{
                width: "125px",
                background: tagsColors.one,
                color: "#fff",
                transition: "all .8s",
                "&:hover": {
                  background: tagsColors.four,
                },
              }}
            >
              Выйти
            </Button>
          </Box>
        </BoxMainRightTop>

        <BoxMainRightBottom>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#5461A4",
              mb: "15px",
            }}
          >
            <SettingsApplicationsIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
            <Typography variant="h5" component={"span"}>
              Настроика аккаунта
            </Typography>
          </Box>
          <Divider sx={{ background: "#5461A4" }} />

          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="icon position tabs example"
            // textColor="#4A4A4E"
            indicatorColor="primary"
          >
            <Tab
              icon={<EditIcon />}
              iconPosition="start"
              label="Редактирования профиля"
            />
            <Tab
              icon={<DeleteIcon />}
              iconPosition="start"
              label="Удалить аккаунт"
            />
          </Tabs>

          <TypographySearch variant="h6" component={"div"}>
            Имя
          </TypographySearch>
          <TextField fullWidth type="search" placeholder="Имя"></TextField>

          <TypographySearch variant="h6" component={"div"}>
            Фамилия
          </TypographySearch>
          <TextField fullWidth type="search" placeholder="Фамилия"></TextField>

          <TypographySearch variant="h6" component={"div"}>
            Почта
          </TypographySearch>
          <TextField fullWidth type="search" placeholder="Почта"></TextField>

          <FormControl
            sx={{
              mt: "20px",
            }}
          >
            <FormLabel id="demo-controlled-radio-buttons-group">Пол</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              row
            >
              <FormControlLabel
                value="Женский"
                control={<Radio />}
                label="Женский"
                sx={{
                  color: "#696969",
                }}
              />
              <FormControlLabel
                value="Мужской"
                control={<Radio />}
                label="Мужской"
                sx={{
                  color: "#696969",
                }}
              />
            </RadioGroup>
          </FormControl>

          <Button
            variant="contained"
            sx={{
              display: "block",
              mt: "10px",
              background: "#9294C9",
              "&:hover": {
                background: "#9294C9",
              },
            }}
          >
            Редактировать
          </Button>
        </BoxMainRightBottom>
      </BoxMainRight>
    </BoxMainStyled>
  );
};

export default ProfileDetails;
