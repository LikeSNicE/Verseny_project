import React from 'react';
import FilterBlockCustom from '../../../Components/FilterBlock/FilterBlock';
import CardCustom from '../../../Components/CardCutsom/CardCustom';
import styles from '../MyChannel.module.scss';

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

const TabConcurs = () => {
  return (
    <div>
      <FilterBlockCustom />

      <div className={styles.profileCards}>
        {dataCard.map((item, index) => (
          <CardCustom role={""} key={index} dataCard={item} />
        ))}
      </div>
    </div>
  );
};

export default TabConcurs;