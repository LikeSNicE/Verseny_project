
import PropTypes from "prop-types";
import React, { useState } from "react";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import TagScience from "../../Components/TagScience/tagScience";
import styles from "./ConcursDetails.module.scss";
import AvatarCustom from "../../Components/AvatarCustom/AvatarCustom";
import SubComponents from "../../Components/SubOnChannel/SubOnChannel";
import TableBlock from "./TableBlock/TableBlock";
import FeaturesBlock from "./FeaturesBlock/FeaturesBlock";
import * as Muicon from "@mui/icons-material";
import ModalParticipate from "../../Components/ModalComponents/ParticipateModal/ParticipateModal";

const ConcursDetails = (props) => {
  const {
    img,
    titleMain,
    tabText,
    dataStartNumber,
    dataEndNumber,
    countUser,
    descriptionText,
  } = props;


   const DataAvatar = {
     name: "Ubisoft",
     link: "/channel/id",
     avatar:
       "https://img5.goodfon.ru/wallpaper/nbig/f/6e/the-last-of-us-part-2-odni-iz-nas-elli-ellie-ps4-game-art.jpg",
   };

   const DataTabs = [
     {
       id: 1,
       label: "Призы конкурса",
       value: <TableBlock />,
     },
     {
       id: 2,
       label: "Подробности",
       value: <FeaturesBlock />,
     },
   ];


  const PeopleIcon = Muicon["PeopleOutlined"];

  return (
    <div className={styles.concursDetailsSection}>
      <div className={styles.concursDetailsSectionPoster}>
        <img src={img} alt="Poster Main" />
      </div>

      <div className={styles.concursDetailsSectionBoxTitles}>
        <div className={styles.concursDetailsSectionTitleMain}>{titleMain}</div>
        <div className={styles.concursDetailsSectionTab}>
          <TagScience children={tabText} />
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
          <PeopleIcon />
          <p>{countUser} участников</p>
        </div>
        <div>
          <ModalParticipate />
        </div>
      </div>

      <h1 className={styles.concursDetailsSectionOrganizer}>Организатор</h1>

      <div className={styles.concursDetailsSectionBoxAuthor}>
        <div className={styles.concursDetailsSectionBoxAuthorLeft}>
          <AvatarCustom data={DataAvatar} />
        </div>
        <div className={styles.concursDetailsSectionBoxAuthorRight}>
          <SubComponents />
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
        <TabsCustom dataTabs={DataTabs} />
      </div>
    </div>
  );
};
export default ConcursDetails;

ConcursDetails.propTypes = {
  posterMain: PropTypes.string,
  titleMain: PropTypes.string,
  tabText: PropTypes.string,
  dataStartNumber: PropTypes.string,
  dataEndNumber: PropTypes.string,
  authorName: PropTypes.string,
  authorPhoto: PropTypes.string,
  countUser: PropTypes.number,
  authorCountOfSubscribers: PropTypes.number,
  descriptionText: PropTypes.string,
};
