import React from "react";
import styles from "./Channel.module.scss";
import { Avatar } from "@mui/material";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import CardCustom from "../../Components/CardCutsom/CardCustom";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import * as Muicon from "@mui/icons-material";


const Channel = () => {

  const VersenyLogo = Muicon['CampaignOutlined'];
  const ListFeautes = Muicon["ListAltOutlined"];

  const DataTabs = [
    {
      id: 1,
      label: 'Конкурсы',
      value: <Concurs/>,
      icon: <VersenyLogo/>
    },
    {
      id: 2,
      label: "Подробности",
      value: 'Hello',
      icon: <ListFeautes/>
    }
  ]

  return (
    <div className={styles.sectionChannel}>
      <img
        className={styles.sectionChannelPoster}
        src="https://images5.alphacoders.com/128/thumb-1920-1289938.jpg"
        alt="poster channel"
      />
      <div className={styles.sectionChannelInfo}>
        <div className={styles.sectionChannelInfoTop}>
          <div className={styles.sectionChannelInfoProfile}>
            <Avatar
              className={styles.sectionChannelInfoProfileImg}
              src="https://avatars.githubusercontent.com/u/85344443?s=64&v=4"
              alt="profile photo"
            />
            <div className={styles.sectionChannelInfoProfileData}>
              <p className={styles.sectionChannelInfoProfileDataCompany}>
                Ubisoft
              </p>
              <p
                className={styles.sectionChannelInfoProfileDataAmountSubcribers}
              >
                30 подписчиков
              </p>
            </div>
          </div>
          <div className={styles.sectionChannelInfoRightBlock}>
            <ButtonCustom
              className={styles.sectionChannelInfoRightBlockSubscribe}
            >
              Подписаться
            </ButtonCustom>
          </div>
        </div>

        <div className={styles.sectionChannelInfoBottom}>
          {/* <TabsCustom
            className={styles.sectionChannelInfoBottomLink}
            to="all-concurs"
          >
            Конкурсы
          </TabsCustom>
          <TabsCustom
            className={styles.sectionChannelInfoBottomLink}
            to="feauters"
          >
            Подробности
          </TabsCustom> */}
          <TabsCustom dataTabs={DataTabs}/>
        </div>
      </div>
      
    </div>
  );
};

export default Channel;

const Concurs = () => {

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


  return (
    <div className={styles.sectionChannelConcurs}>
      <FilterBlockCustom />
      <div className={styles.sectionChannelConcursInner}>
        {dataCard.map((item, index) => (
          <CardCustom role={""} key={index} dataCard={item}/>
        ))}
      </div>
    </div>
  );
};
