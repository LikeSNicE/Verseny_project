import React from "react";
import styles from "./HomePage.module.scss";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import { TextField,styled} from "@mui/material";
import CardCustom from "../../Components/Card/Card";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import InputCustom from '../../Components/InputCustom/InputCustom';
import SearchInputCustom from "../../Components/SeacrhInput/SearchInput";


const HomePage = () => {


  const dataForCard = [
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://mobimg.b-cdn.net/v3/fetch/54/54e7919c1cfb738311b2bad4e510bb89.jpeg",
      titleCard: "Конкурс открытки «Герои сказок А.Cdsadasdasdadadsaddddd",
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
      backgroundTop: "green",
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
    <div className={styles.sectionHomePage}>
      <div className={styles.sectionHomePageTitle}>Главная</div>
      <div className={styles.sectionHomePageSearchInput}>
        {/* <InputCustom type="search"/> */}
        <SearchInputCustom label="Найдется все"/>
      </div>
      <FilterBlockCustom />

      <div className={styles.sectionHomePageInner}>
        {dataForCard.map((item, index) => (
          <CardCustom
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
