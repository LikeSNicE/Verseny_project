import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import styles from "./ConcursDetails.module.scss";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AddReactionOutlinedIcon from "@mui/icons-material/AddReactionOutlined";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import TableUI from "../../Common/Table/Table";
import {Route, Routes, useLocation,Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import { headData,dataTable } from "./ConcursDetailsData";
import TagScience from "../../Components/TagScience/tagScience";


const ConcursDetails = (props) => {
  const {
    posterMain,
    titleMain,
    tabText,
    dataStartNumber,
    dataEndNumber,
    countUser,
    authorPhoto,
    authorName,
    authorCountOfSubscribers,
    descriptionText,
  } = props;

  const location = useLocation();

     if (location.pathname === "/concurs/id") {
       return <Navigate to={"/concurs/id/prizes"} />;
     }

 
  return (
    <div className={styles.concursDetailsSection}>
      <div className={styles.concursDetailsSectionPoster}>
        <img src={posterMain} alt="Poster Main" />
      </div>

      <div className={styles.concursDetailsSectionBoxTitles}>
        <div className={styles.concursDetailsSectionTitleMain}>{titleMain}</div>
        <div className={styles.concursDetailsSectionTab}>
          <TagScience
            children={tabText}
          />
        </div>
      </div>

      <div className={styles.concursDetailsSectionDate}>
        <h1 className={styles.concursDetailsSectionDateTitle}>
          Дата начало - конец :
        </h1>
        <h3 className={styles.concursDetailsSectionDateSubtitle}>
          {dataStartNumber} - {dataEndNumber}
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
          <TabsCustom to="prizes">Призы консурса</TabsCustom>
        </div>
        <div className={styles.concursDetailsSectionNavCondition}>
          <TabsCustom to="condition"> Условия проведения</TabsCustom>
        </div>
      </div>

      <div className={styles.concursDetailsSectionSwitchTabs}>
        {/* <TableUI data={dataTable} head={headData}  /> */}
        <Routes>
          <Route path="prizes" element={<TableBlock />} />
          <Route path="condition" element={<FeatuersBlock />} />
        </Routes>
      </div>
    </div>
  );
};

const TableBlock = () => {
   
  return (
     <TableUI data={dataTable} head={headData}/> 
  );
}

const FeatuersBlock = () => {
  return (
    <div className={styles.conditionSection}>
      <h3 className={styles.conditionSectionTitle}>Условия конкурса : </h3>
      <ul className={styles.conditionSectionList}>
        <li className={styles.conditionSectionListItem}>
          Для участия в розыгрыше необходимо: - Подписаться на группу: *ссылка*;
          - Сделать репост этой записи.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corporis repudiandae veniam perferendis sit! Accusamus autem debitis impedit exercitationem quam? Nesciunt minima, qui quibusdam in culpa quod similique facere provident?
          Nisi repellendus ducimus ipsam cupiditate dolorem omnis. Recusandae maiores quam iste velit commodi veritatis facilis reprehenderit nisi dolorem vel officiis sint et, a illo, molestiae doloremque, aperiam voluptatum deserunt voluptas.
        </li>
      </ul>
    </div>
  );
};


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
