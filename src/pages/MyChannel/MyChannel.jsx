import React, { useState } from "react";
import styles from "./MyChannel.module.scss";
import TooltipCustom from "../../Components/ToolTipCustom/ToolTipCustom";
import ModalCustom from "../../Components/Modal/Modal";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import imgEdit from "../../assets/images/icons/Edit.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import CardCustom from "../../Components/Card/Card";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const MyChannel = () => {
  let [hovered, setHovered] = useState(false);
  const [isOpen, setOpen] = useState(false);

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
    <div className={styles.sectionChannel}>
      <div className={styles.profileBanner}>
        <img
          src="https://pbs.twimg.com/media/D6H3CT0WwAA5_yg.jpg"
          alt="profile header_photo"
        />
        {/* 
        <ModalChangeCoverChannel className={styles.profileBannerEditBtn} /> */}
        <ModalCustom
          rootClass={styles.profileBannerEditBtn}
          icon={<EditOutlinedIcon />}
          iconStyles={styles.modalSectionTopIcon}
          text="Изменить обложку"
          btnStyles={styles.editBtn}
          btnLabel="Изменить обложку"
          btnStartIcon={<EditOutlinedIcon />}
          open={isOpen}
          setIsOpen={setOpen}
        >
          <ImageUploader />
        </ModalCustom>
      </div>

      {/*Profile Section*/}
      <div className={styles.profileSection}>
        <div className={styles.profileSectionInfoLeft}>
          <div>
            <Button
              variant="contained"
              component="label"
              className={styles.profileSectionInfoLeftLink}
              to={"#"}
              onMouseLeave={() => setHovered(false)}
              onMouseEnter={(e) => {
                e.stopPropagation();
                setHovered(true);
              }}
            >
              {hovered ? (
                <div className={styles.profileSectionInfoLeftLinkHover}>
                  <img src={imgEdit} alt="" />
                  <input type="file" hidden />
                </div>
              ) : (
                <img
                  className={styles.profileSectionInfoLeftImg}
                  src="https://cybersport.metaratings.ru/storage/images/e6/ee/e6ee248b4bceb7fdf71a74871f8a0425.jpg"
                  alt=""
                />
              )}
            </Button>
          </div>
          <div className={styles.profileSectionInfoLeftText}>
            <p className={styles.profileSectionInfoLeftTextName}>Беккожа Аян</p>
            <p className={styles.profileSectionInfoLeftTextSubcribers}>
              30 467 подписчиков
            </p>
          </div>
        </div>

        <div className={styles.profileSectionInfoRight}>
          <div className={styles.profileSectionInfoRightIconShare}>
            <Button
              className={
                styles.profileSectionInfoRightIconChannel +
                " " +
                styles.profileSectionInfoRightIconBtnShare
              }
            >
              <TooltipCustom
                placement="top"
                titleText={"Поделиться ссылкой на канал"}
                children={
                  <Link>
                    <ShareOutlinedIcon />
                  </Link>
                }
              />
            </Button>
          </div>
          <div>
            <div className={styles.profileSectionInfoRightIconSetting}>
              <Button
                className={
                  styles.profileSectionInfoRightIconChannel +
                  " " +
                  styles.profileSectionInfoRightIconBtnSetting
                }
              >
                <TooltipCustom
                  placement="top"
                  titleText={"Настройки канала"}
                  children={
                    <Link to={"/profileInfoChannel/setting/user"}>
                      <SettingsOutlinedIcon />
                    </Link>
                  }
                />
              </Button>
            </div>
          </div>

          <div>
            <div className={styles.profileSectionInfoRightIconAddConcurs}>
              <Button
                className={
                  styles.profileSectionInfoRightIconChannel +
                  " " +
                  styles.profileSectionInfoRightIconBtnAddConcurs
                }
              >
                <TooltipCustom
                  placement="top"
                  titleText={"Добавить конкурс"}
                  children={
                    <Link>
                      <AddOutlinedIcon />
                    </Link>
                  }
                />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FilterBlockCustom />

      <div className={styles.profileCards}>
        {dataForCard.map((item, index) => (
          <CardCustom key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MyChannel;
