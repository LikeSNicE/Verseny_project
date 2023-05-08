import React from "react";
import styles from "./Channel.module.scss";
import { Avatar } from "@mui/material";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import CardCustom from "../../Components/Card/Card";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";

const Channel = () => {
  const location = useLocation();

  if (location.pathname === "/channel/id"){
    return <Navigate to={"/channel/id/all-concurs"} />;
  }else{
    
  }
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
            <ButtonCustom className={styles.sectionChannelInfoRightBlockShare}>
              {<ShareOutlinedIcon />}
            </ButtonCustom>

            <ButtonCustom
              className={styles.sectionChannelInfoRightBlockSubscribe}
            >
              Подписаться
            </ButtonCustom>
          </div>
        </div>

        <div className={styles.sectionChannelInfoBottom}>
          <TabsCustom
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
          </TabsCustom>
        </div>
      </div>

      <Routes>
        <Route path="all-concurs" element={<Concurs />} />
        <Route path="feauters" />
      </Routes>
    </div>
  );
};

export default Channel;

const Concurs = () => {
  const dataForCard = [
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },

    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },
  ];

  return (
    <div className={styles.sectionChannelConcurs}>
      <FilterBlockCustom />
      <div className={styles.sectionChannelConcursInner}>
        {dataForCard.map((item, index) => (
          <CardCustom
            key={index}
            backgroundTop={item.backgroundTop}
            iconStatus={item.iconStatus}
            statusText={item.statusText}
            posterCard={item.posterCard}
            titleCard={item.titleCard}
            photoAuthor={item.photoAuthor}
            nameAuthor={item.nameAuthor}
            iconType={item.iconType}
            textType={item.textType}
            countUser={item.countUser}
          />
        ))}
      </div>
    </div>
  );
};
