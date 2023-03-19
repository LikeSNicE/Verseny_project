import React, { useState } from "react";
import {
  Box,
  styled,
  Typography,
  Button,
  Avatar,
  Tabs,
  Tab,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  OutlinedInput,
  useTheme
} from "@mui/material";

import { Titles } from "../../theme";
import { ButtonColors} from "../styles/vars-colors/varsColors";
import ShareIcon from "@mui/icons-material/Share";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CardItem from "../Common/Card";

const BoxHeaderChannel = styled(Box)({
  marginTop: "20px",
});
const { h1, h2, h3, h4, h5, h6 } = Titles;

const ProfileInfoChannel = () => {
  // tabs
  const [tab, setTab] = useState(0);
  const handleChangeTabs = (event, newValue) => {
    setTab(newValue);
  };

  // select date
  const [date, setDate] = useState("");
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  // select type
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const names = [
    "Ссылка",
    "Файлы",
    "Фото",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };



  // render buttons 
  const initialState = {
    buttons: [
      { id: 1, title: "Точные Науки" },
      { id: 2, title: "Програмирования" },
      { id: 3, title: "Рисования" },
      { id: 4, title: "Гуманитарные науки" },
      { id: 5, title: "3D Модели" },
      { id: 6, title: "Эссе" },
      { id: 7, title: "Сценарий" },
    ],
  };

  return (
    //  {/*Box Main*/}
    <Box>
      {/* Header Channel */}
      <BoxHeaderChannel>
        <img src={"https://pbs.twimg.com/media/D6H3CT0WwAA5_yg.jpg"} alt="" />
      </BoxHeaderChannel>

      {/* header info*/}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          boxShadow: "box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)",
          //border: "1px solid #000",
          padding: "20px 30px 0",
        }}
      >
        {/* header info left*/}
        <Box display="flex">
          <Avatar
            src={
              "https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"
            }
            alt="Avatar Small Header"
            sx={{ mr: "10px" }}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Ubisoft
            </Typography>
            <p>30 подписчиков</p>
          </Box>
        </Box>
        {/* header info right*/}
        <Box display="flex" alignItems="center">
          <Button
            variant="contained"
            component="label"
            sx={{
              background: ButtonColors.one,
              mr: "25px",
              borderRadius: "15px",
            }}
          >
            <ShareIcon />
          </Button>
          <Button
            variant="contained"
            component="label"
            sx={{
              borderRadius: "15px",
              background: ButtonColors.two,
            }}
          >
            Подписаться
          </Button>
        </Box>
      </Box>
      <Tabs
        value={tab}
        onChange={handleChangeTabs}
        aria-label="icon position tabs example"
        textColor="#4A4A4E"
        indicatorColor="primary"
      >
        <Tab
          icon={<CampaignOutlinedIcon />}
          iconPosition="start"
          label="Конкурсы"
        />
        <Tab
          icon={<ListAltOutlinedIcon />}
          iconPosition="start"
          label="Подробности"
        />
      </Tabs>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="40px"
      >
        {/*Typography and  Select left */}
        <Box display="flex" alignItems="center">
          <Typography variant="h3" fontSize={Titles.h3} sx={{ mr: "25px" }}>
            Показать
          </Typography>

          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Новинка
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={date}
              label=" Новинка"
              onChange={handleChangeDate}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Выб Тип</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={personName}
              onChange={handleChange}
              input={
                <OutlinedInput id="select-multiple-chip" label="Выб Тип" />
              }
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>

      <Box>
        {initialState.buttons.map((button, index) => (
          <Button
            onClick={(id) => {}}
            variant="outlined"
            key={button.id}
            sx={{
              mt: "35px",
              "& + &": {
                ml: "15px",
              },
            }}
          >
            {button.title}
          </Button>
        ))}
      </Box>

      <Box
        sx={{
          mt: "45px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gridGap: "20px",
        }}
      >
        <CardItem
          title="Lizard"
          poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorName="Ubisoft"
          startDate="2 февраля 2022 "
          endDate="20 февраля 2022 "
          nameOfSilence="Гумманитарные науки"
          iconType={<ImageOutlinedIcon />}
        />

        <CardItem
          title="Lizard"
          poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorName="Ubisoft"
          startDate="2 февраля 2022 "
          endDate="20 февраля 2022 "
          nameOfSilence="Гумманитарные науки"
          iconType={<ImageOutlinedIcon />}
        />

        <CardItem
          title="Lizard"
          poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorName="Ubisoft"
          startDate="2 февраля 2022 "
          endDate="20 февраля 2022 "
          nameOfSilence="Гумманитарные науки"
          iconType={<ImageOutlinedIcon />}
        />

        <CardItem
          title="Lizard"
          poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          authorName="Ubisoft"
          startDate="2 февраля 2022 "
          endDate="20 февраля 2022 "
          nameOfSilence="Гумманитарные науки"
          iconType={<ImageOutlinedIcon />}
        />
      </Box>
    </Box>
  );
};

export default ProfileInfoChannel;
