import React from "react";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import styles from "./Card.module.scss";
import { Avatar } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ButtonCustom from "../ButtonCustom/ButtonCustom";

const Card = ({ icon }) => {
  return (
    <div className={styles.cardSection}>
      <div className={styles.cardSectionTop}>
        <div className={styles.cardSectionTopTitle}>
          Срок окончание конкурса
        </div>
        <div className={styles.cardSectionTopBox}>
          <div className={styles.cardSectionTopBoxIcon}>
            {/* {icon} */}
            <AccessTimeOutlinedIcon />
          </div>
          <div className={styles.cardSectionTopBoxTitle}>Через 10 часов</div>
        </div>
      </div>

      <div className={styles.cardSectionImg}>
        <img
          src="https://img.championat.com/s/1350x900/news/big/k/e/the-last-of-us-part-ii-voshla-v-spisok-samyh-vysokoocenjonnyh-igr-goda-po-versii-metacriti_15947436521431898188.jpg"
          alt="card poster"
        />
      </div>

      <div className={styles.cardSectionMain}>
        <div className={styles.cardSectionTitle}>
          Конкурс открытки «Герои сказок А. С...
        </div>

        <div className={styles.cardSectionBoxAuthor}>
          <Avatar
            className={styles.cardSectionAuthorImg}
            src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"
            alt="Author Avatar"
          />
          <p className={styles.cardSectionAuthorName}>Ubisoft</p>
        </div>

        <div className={styles.cardSectionParticipate}>
          <div className={styles.cardSectionParticipateTitle}>Тип участия:</div>
          <div className={styles.cardSectionParticipateType}>
            <ImageOutlinedIcon />
            <span className={styles.cardSectionParticipateSubtitle}>Фото</span>
          </div>
        </div>

        <div className={styles.cardSectionCountType}>
          <div className={styles.cardSectionCountTypeTabBtn}>
            Гуманитарные науки
          </div>
          <div className={styles.cardSectionCountTypeUser}>
            <Diversity3OutlinedIcon />
            <p>20</p>
          </div>
        </div>

        <ButtonCustom className={styles.cardSectionShowUserBtn} startIcon={<Diversity3OutlinedIcon />}>
          Посмотреть участников
        </ButtonCustom>
      </div>
    </div>
  );
};

export default Card;
