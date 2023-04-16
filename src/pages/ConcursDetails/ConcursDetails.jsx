import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import MainPhoto from "../../assets/images/header/main.jpg";
import Star from "../../assets/images/header/star.svg";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import styles from "./ConcursDetails.module.scss";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import TableUI from "../../Common/Table/Table";
import PlaceIconCustom from "../../Components/PlaceIconCustom/PlaceIconCustom";
import { NavLink, Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import SwitchTabStyles from "../../Components/SwitchTabStyles/SwitchTabStyles";

const ConcursDetails = (props) => {
  const {
    posterMain,
    titleMain,
    tabText,
    dataStartNumber,
    dataStartMonth,
    dataStartYear,
    dataEndMonth,
    dataEndNumber,
    dataEndYear,
    countUser,
    authorPhoto,
    authorName,
    authorCountOfSubscribers,
    descriptionText,
  } = props;

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "rgba(217, 217, 217, 0.5)" : null,
      borderRadius: isActive ? "15px" : null,
    };
  };

  return (
    <div className={styles.concursDetailsSection}>
      <div className={styles.concursDetailsSectionPoster}>
        <img src={posterMain} alt="Poster Main" />
      </div>

      <div className={styles.concursDetailsSectionBoxTitles}>
        <div className={styles.concursDetailsSectionTitleMain}>{titleMain}</div>
        <div className={styles.concursDetailsSectionTab}>{tabText}</div>
      </div>

      <div className={styles.concursDetailsSectionDate}>
        <h1 className={styles.concursDetailsSectionDateTitle}>
          Дата начало - конец :
        </h1>
        <h3 className={styles.concursDetailsSectionDateSubtitle}>
          {dataStartNumber}- {dataEndNumber}
        </h3>
      </div>

      <div className={styles.concursDetailsSectionParticipate}>
        <div className={styles.concursDetailsSectionParticipateGroup}>
          <PeopleOutlineIcon />
          <p>{countUser} участников</p>
        </div>
        <div>
          <ButtonCustom
            className={styles.concursDetailsSectionParticipateBtn}
            startIcon={<AddReactionOutlinedIcon />}
          >
            Участвовать
          </ButtonCustom>
        </div>
      </div>

      <h1 className={styles.concursDetailsSectionOrganizer}>Организатор</h1>

      <div className={styles.concursDetailsSectionBoxAuthor}>
        <div className={styles.concursDetailsSectionBoxAuthorLeft}>
          <div className={styles.concursDetailsSectionBoxAuthorLeftAvatar}>
            <Avatar src={authorPhoto} />
          </div>
          <div className={styles.concursDetailsSectionBoxAuthorLeftInfo}>
            <p>{authorName}</p>
            <p>{authorCountOfSubscribers} подписчиков</p>
          </div>
        </div>
        <div className={styles.concursDetailsSectionBoxAuthorRight}>
          <ButtonCustom
            className={styles.concursDetailsSectionBoxAuthorRightBtn}
          >
            Подписаться
          </ButtonCustom>
        </div>
      </div>

      <div className={styles.concursDetailsSectionDescription}>
        <h3 className={styles.concursDetailsSectionDescriptionTitle}>
          Описание конкурса :{" "}
        </h3>
        <p className={styles.concursDetailsSectionDescriptionText}>
          {descriptionText}
        </p>
      </div>

      <div className={styles.concursDetailsSectionNav}>
        <div className={styles.concursDetailsSectionNavPrizes}>
          <NavLink to={"prizes"} style={navLinkStyles}>
            Призы консурса
          </NavLink>
        </div>
        <div className={styles.concursDetailsSectionNavCondition}>
          <NavLink to={"condition"} style={navLinkStyles}>
            Условия проведения
          </NavLink>
        </div>
      </div>

      <div className={styles.concursDetailsSectionSwitchTabs}>
        {/* <TableUI data={dataTable} head={headData}  /> */}
        <Routes>
          <Route path="prizes" element={<TableDD />} />
          <Route path="condition" element={<DD />} />
        </Routes>
      </div>
    </div>
  );
};

const DD = () => {
  return (
    <div className={styles.conditionSection}>
      <h3 className={styles.conditionSectionTitle}>Условия конкурса : </h3>
      <ul className={styles.conditionSectionList}>
        <li className={styles.conditionSectionListItem}>
          Для участия в розыгрыше необходимо: - Подписаться на группу: *ссылка*;
          - Сделать репост этой записи.
        </li>
        <li className={styles.conditionSectionListItem}>
          Выполни условия: - Подпишись на группу; - Поставь лайк на эту и 2
          предыдущие записи; - Сделай репост этой записи к себе на страницу и не
          удаляй до завершения конкурса.
        </li>
        <li className={styles.conditionSectionListItem}>
          Условия участия: - Быть участником группы; - Поставить лайк этому
          посту; - Сделать репост к себе на страницу; - Написать "участвую в
          конкурсе" в комментариях.
        </li>
        <li className={styles.conditionSectionListItem}>
          Условия участия: - Быть участником группы; - Поставить лайк этому
          посту; - Сделать репост к себе на страницу; - Написать "участвую в
          конкурсе" в комментариях.
        </li>
      </ul>
    </div>
  );
}

const TableDD = () => {
    const headData = ["Место", "Приз"];
  const dataTable = [
    [
      {
        PlaceIcon: "1",
      },
      {
        AboutFile: ["100000 тенге"],
      },
    ],
    [
      {
        PlaceIcon: "2",
      },
      {
        AboutFile: ["50000 тенге"],
      },
    ],
    [
      {
        PlaceIcon: "3",
      },
      {
        AboutFile: ["25000 тенге"],
      },
    ],
    [
      {
        PlaceIcon: "4",
      },
      {
        AboutFile: ["12500 тенге"],
      },
    ],
    [
      {
        PlaceIcon: "5",
      },
      {
        AboutFile: ["6250 тенге"],
      },
    ],
  ];
  return (
     <TableUI data={dataTable} head={headData}/> 
  );
}

export default ConcursDetails;

ConcursDetails.propTypes = {
  posterMain: PropTypes.string,
  titleMain: PropTypes.string,
  tabText: PropTypes.string,
  dataStartNumber: PropTypes.string,
  dataStartMonth: PropTypes.string,
  dataStartYear: PropTypes.string,
  dataEndMonth: PropTypes.string,
  dataEndNumber: PropTypes.string,
  dataEndYear: PropTypes.string,
  authorName: PropTypes.string,
  authorPhoto: PropTypes.string,
  countUser: PropTypes.number,
  authorCountOfSubscribers: PropTypes.number,
  descriptionText: PropTypes.string,
};
