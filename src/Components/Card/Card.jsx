import React from "react";
import styles from "./Card.module.scss";
import { Avatar } from "@mui/material";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

import ButtonCustom from "../ButtonCustom/ButtonCustom";
import { Link } from "react-router-dom";
import TagScience from "../TagScience/tagScience";

const CardCustom = ({
  backgroundTop,
  iconStatus,
  statusText,
  posterCard,
  titleCard,
  photoAuthor,
  nameAuthor,
  iconType,
  textType,
  countUser
}) => {
  return (
    <div className={styles.cardSection}>
      <div
        style={{ backgroundColor: backgroundTop }}
        className={styles.cardSectionTop}
      >
        <div className={styles.cardSectionTopTitle}>
          Срок окончание конкурса
        </div>
        <div className={styles.cardSectionTopBox}>
          <div className={styles.cardSectionTopBoxIcon}>{iconStatus}</div>
          <div className={styles.cardSectionTopBoxTitle}>{statusText}</div>
        </div>
      </div>

      <div className={styles.cardSectionImg}>
        <img src={posterCard} alt="card poster" />
      </div>

      <div className={styles.cardSectionMain}>
        <div className={styles.cardSectionTitle}>{titleCard}</div>

        <div className={styles.cardSectionBoxAuthor}>
          <Avatar
            className={styles.cardSectionAuthorImg}
            src={photoAuthor}
            alt="Author Avatar"
          />
          <p className={styles.cardSectionAuthorName}>{nameAuthor}</p>
        </div>

        <div className={styles.cardSectionParticipate}>
          <div className={styles.cardSectionParticipateTitle}>Тип участия:</div>
          <div className={styles.cardSectionParticipateType}>
            {/* <ImageOutlinedIcon /> */}
            {iconType}
            <span className={styles.cardSectionParticipateSubtitle}>
              {textType}
            </span>
          </div>
        </div>

        <div className={styles.cardSectionCountType}>
          <div className={styles.cardSectionCountTypeTabBtn}>
            <TagScience children={'Гумманитарные науки'}/>
          </div>
          <div className={styles.cardSectionCountTypeUser}>
            <PeopleOutlineIcon />
            <p>{countUser}</p>
          </div>
        </div>

        <Link to={'/concurs/id/prizes'}>
          <ButtonCustom
            className={styles.cardSectionShowUserBtn}
            startIcon={<PeopleOutlineIcon />}
          >
            Перейти к конкурсу
          </ButtonCustom>
        </Link>
      </div>
    </div>
  );
};

export default CardCustom;
