import React from "react";
import styles from "./myConcurs.module.scss";
import AvatarCustom from "../../Components/AvatarCustom/AvatarCustom";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import * as Muicon from "@mui/icons-material";
import WinsConcurs from "./winsConcurs/winsConcurs";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import { Grid, MenuItem } from "@mui/material";
import ButtonDropdown from "../../Components/ButtonDropDownCustom/ButtonDropdown";
import IconCustom from "../../Components/IconCustom/IconCustom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import CardCustom from "../../Components/CardCutsom/CardCustom";

const AccessTimeOutlined = Muicon["AccessTimeOutlined"];

const DataAvatar = {
  name: "Ubisoft",
  link: "/channel/id",
  description: "bekkozha.ayan@mail.ru",
  avatar:
    "https://img5.goodfon.ru/wallpaper/nbig/f/6e/the-last-of-us-part-2-odni-iz-nas-elli-ellie-ps4-game-art.jpg",
};

const dataForWins = [
  {
    poster:
      "https://sun1-96.userapi.com/C8JROvbxlgJguZqdSFJqaieJR9hGDynU_Btadg/KLoQ-0g5c2A.jpg",
    description: "Конкурс открытки «Герои сказок А. С...",
  },
];

const DataTabs = [
  {
    id: 2,
    label: "Ожидаемые конкурсы",
    icon: <AccessTimeOutlined />,
    value: <div>Hello</div>,
  },
];



const dataCard = [
  {
    term: {
      icon: "ErrorOutlineOutlined",
      //ErrorOutlineOutlined
      //CheckCircleOutlined
      message: "Конкурс окончен",
      state: "Success",
    },
    concurs: {
      img: "https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg",
      name: "Конкурс открытки «Герои сказок А. С. Пушкина поздравляют с Новым годом и Рождеством»",
      type: {
        text: "Фото",
        icon: "InsertPhotoOutlined",
      },
      participant: 20,
      category: {
        text: "Гуманитарные науки",
        color: "#F8B84A",
      },
    },
    author: {
      avatar:
        "https://images-ext-1.discordapp.net/external/_DY1anSP2XlAmXYBaMmEcmqza9Wa_yVtbdZy4tBHvoU/%3Fs%3D400%26u%3D6c92f6fc049c598f01fa6554b575c74dbf789e07%26v%3D4%2522%2C/https/avatars.githubusercontent.com/u/85344443",
      name: "Ubisoft",
      link: "/channel/@Ubisoft",
    },
  },
];

const MyConcurs = () => {
  return (
    <div className={styles.myconcurs}>

      <div className={styles.myconcursMain}>
        <div className={styles.myconcursMainInfo}>
          <TabsCustom dataTabs={DataTabs} />
        </div>
        <div className={styles.myconcursMainResult}>
          <div className={styles.myconcursMainResultFilter}>
            <FilterBlockCustom />
          </div>

          <div className={styles.myconcursMainItems}>

            {dataCard.map((item, index) => (
              <CardCustom key={index} dataCard={item}>
                <Grid container spacing={0.5}>
                  <Grid item xs={8}>
                    <ButtonCustom
                      style={{ fontSize: "13px", width: "100%" }}
                      color="primary"
                      startIcon={<IconCustom icon={"PeopleAltOutlined"} />}
                    >
                      Участники
                    </ButtonCustom>
                  </Grid>
                  <Grid item xs={4}>
                    <ButtonDropdown
                      buttonChildren="Еще"
                      style={{ backgroundColor: "#D9D9D9", fontSize: "13px" }}
                    >
                      <MenuItem>
                        <IconCustom icon="ModeEditOutlineOutlined" />
                        Редактировать
                      </MenuItem>
                      <MenuItem>
                        <IconCustom icon="DeleteOutlineOutlined" />
                        Удалить
                      </MenuItem>
                    </ButtonDropdown>
                  </Grid>
                </Grid>
              </CardCustom>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyConcurs;
