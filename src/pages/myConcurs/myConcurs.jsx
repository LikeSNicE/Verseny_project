import React, { useState } from "react";
import styles from "./myConcurs.module.scss";
import SelectUI from "../../Components/Select/Select";
import CardCustom from "../../Components/Card/Card";
import TagButton from "../../Components/TagButton/TagButton";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const MyConcurs = () => {

  // card
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
    <div className={styles.myconcurs}>
      
      <div className={styles.myconcursTitle}>Ваши участия</div>
      <FilterBlockCustom/>

      <div className={styles.myconcursInner}>
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

export default MyConcurs;
