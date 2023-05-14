import React from "react";
import styles from "./HomePage.module.scss";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import SearchInputCustom from "../../Components/SeacrhInput/SearchInput";
import CardCustom from "../../Components/CardCutsom/CardCustom";

const HomePage = () => {
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
        link: "/channel/Ubisoft",
      },
    },
  ];

  return (
    <div className={styles.sectionHomePage}>
      <div className={styles.sectionHomePageTitle}>Главная</div>
      <div className={styles.sectionHomePageSearchInput}>
        <SearchInputCustom label="Найдется все" />
      </div>
      <FilterBlockCustom />

      <div className={styles.sectionHomePageInner}>
        {dataCard.map((item, index) => (
          <CardCustom role={"admin"} key={index} dataCard={item}>
          </CardCustom>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
