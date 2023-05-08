import React, { useState } from "react";
import styles from "./MyChannel.module.scss";
import TooltipCustom from "../../Components/ToolTipCustom/ToolTipCustom";
import ModalCustom from "../../Components/Modal/Modal";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import imgEdit from "../../assets/images/icons/Edit.svg";
import { Button } from "@mui/material";
import { Link,Routes,Route,useLocation,Navigate } from "react-router-dom";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import CardCustom from "../../Components/Card/Card";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import InputAvatar from "../../Components/InputAvatar/InputAvatar";
import * as Muicon from "@mui/icons-material"
import Avatar from "react-avatar-edit";

const MyChannel = () => {
  let [hovered, setHovered] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [isAvatar, setIsAvatar] = useState(false);



  const dataForCard = [
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <Muicon.AccessAlarmOutlined />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <Muicon.ImageOutlined />,
      textType: "Фото",
      countUser: "100",
    },
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <Muicon.AccessAlarmOutlined />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <Muicon.ImageOutlined />,
      textType: "Фото",
      countUser: "100",
    },

    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <Muicon.AccessAlarmOutlined />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <Muicon.ImageOutlined />,
      textType: "Фото",
      countUser: "100",
    },
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <Muicon.AccessAlarmOutlined />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <Muicon.ImageOutlined />,
      textType: "Фото",
      countUser: "100",
    },
  ];

  const location = useLocation();

  if(location.pathname === "/mychannel"){
    return <Navigate to={"/mychannel/all-concurs"}/>
  }

  return (
    <div className={styles.sectionChannel}>
      <div className={styles.profileBanner}>
        <img
          src="https://pbs.twimg.com/media/D6H3CT0WwAA5_yg.jpg"
          alt="profile header_photo"
        />
        <ModalCustom
          rootClass={styles.profileBannerEditBtn}
          icon={<Muicon.EditOutlined />}
          iconStyles={styles.modalSectionTopIcon}
          text="Изменить обложку"
          btnStyles={styles.editBtn}
          btnLabel="Изменить обложку"
          btnStartIcon={<Muicon.EditOutlined />}
          open={isOpen}
          setIsOpen={setOpen}
        >
          <ImageUploader />
        </ModalCustom>
      </div>

      {/*Profile Section*/}
      <div className={styles.profileSection}>
        <div className={styles.profileSectionInner}>
          <div className={styles.profileSectionInfoLeft}>
            <div>
              <Button
                variant="contained"
                component="label"
                className={styles.profileSectionInfoLeftLink}
                onMouseLeave={() => setHovered(false)}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setHovered(true);
                }}
              >
                {hovered ? (
                  <div>
                    <div className={styles.profileSectionInfoLeftLinkHover}>
                      <img
                        src={imgEdit}
                        alt=""
                        onClick={() => setIsAvatar(true)}
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    className={styles.profileSectionInfoLeftImg}
                    src="https://cybersport.metaratings.ru/storage/images/e6/ee/e6ee248b4bceb7fdf71a74871f8a0425.jpg"
                    alt=""
                  />
                )}
              </Button>
              <div>
                <ModalCustom
                  icon={<Muicon.EditOutlined />}
                  text="Изменение фото профиля"
                  open={isAvatar}
                  setIsOpen={setIsAvatar}
                >
                  <InputAvatar getAvatar={() => console.log('')}/>
                </ModalCustom>
              </div>
            </div>
            <div className={styles.profileSectionInfoLeftText}>
              <p className={styles.profileSectionInfoLeftTextName}>
                Беккожа Аян
              </p>
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
                      <Muicon.ShareOutlined />
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
                        <Muicon.SettingsOutlined />
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
                      <Link to="/mychannel/create/main">
                        <Muicon.AddOutlined />
                      </Link>
                    }
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileSectionNav}>
          <TabsCustom
            className={styles.profileSectionNavLink}
            to={"all-concurs"}
          >
            Конкурсы
          </TabsCustom>
          <TabsCustom className={styles.profileSectionNavLink} to={"features"}>
            Подробности
          </TabsCustom>
        </div>
      </div>

      <Routes>
        <Route
          path="all-concurs"
          element={
            <div>
              <FilterBlockCustom />

              <div className={styles.profileCards}>
                {dataForCard.map((item, index) => (
                  <CardCustom key={index} {...item} />
                ))}
              </div>
            </div>
          }
        />

        <Route path="features" element={<div>Привет</div>} />
      </Routes>
    </div>
  );
};

export default MyChannel;
