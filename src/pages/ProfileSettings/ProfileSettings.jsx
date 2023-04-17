import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";

import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TransgenderOutlinedIcon from "@mui/icons-material/TransgenderOutlined";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import imgEdit from "../../assets/images/icons/Edit.svg";
import styles from "./ProfileSettings.module.scss";
import SettingUser from "../settingUser/settingUser";
import SettingChannel from "../settingChannel/settingChannel";
import ModalDeleteAccount from "../ModalDeleteAccount/ModalDeleteAccount";
// import ModalChangeCoverChannel from "../ModalChangeCoverChannel/ModalChangeCoverChannel";
import TooltipCustom from "../../Components/ToolTipCustom/ToolTipCustom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ModalCustom from "../../Components/Modal/Modal";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const ProfileInfoChannel = () => {
  let [hovered, setHovered] = useState(false);
  const [isOpen,setOpen] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "rgba(217, 217, 217, 0.5)" : null,
      borderRadius: isActive ? "15px" : null,
    };
  };

  return (
    <div className={styles.profile}>
      {/*profile header*/}
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
            <p className={styles.profileSectionInfoLeftTextCompany}>Ubisoft</p>
          </div>
        </div>

        <div className={styles.profileSectionInfoRight}>
          <div>
            <Button className={styles.profileSectionInfoRightIconChannel}>
              <TooltipCustom
                placement="top"
                titleText={"Мой канал"}
                children={
                  <Link>
                    <AirplayOutlinedIcon />
                  </Link>
                }
              />
            </Button>
          </div>
          <div>
            <div className={styles.profileSectionInfoRightIconDelete}>
              <ModalDeleteAccount />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.profileSetting}>
        <div className={styles.profileSettingLeft}>
          <Routes>
            <Route path="setting/user" element={<SettingUser />} />
            <Route path="setting/channel" element={<SettingChannel />} />
          </Routes>
        </div>

        {/* <SettingChannel/> */}

        {/*Setting user right*/}
        <div className={styles.profileSettingRight}>
          <div className={styles.profileSettingRightTop}>
            <h3>Личные данные</h3>
            <div className={styles.profileSettingRightTopData}>
              <NavLink
                style={navLinkStyles}
                className={styles.profileSettingRightTopDataIcon}
                to={"setting/user"}
              >
                <PersonOutlineOutlinedIcon />
                Профиль
              </NavLink>
            </div>
            <div className={styles.profileSettingRightTopData}>
              <NavLink
                style={navLinkStyles}
                className={styles.profileSettingRightTopDataIcon}
                to={"setting/channel"}
              >
                <AirplayOutlinedIcon />
                Канал
              </NavLink>
            </div>
          </div>

          <div className={styles.profileSettingRightBottom}>
            <h3>Подробная информация</h3>
            <div className={styles.profileSettingRightBottomData}>
              <p>{<AlternateEmailOutlinedIcon />}</p>
              <p>id_1</p>
            </div>
            <div className={styles.profileSettingRightBottomData}>
              <p>{<CardGiftcardOutlinedIcon />}</p>
              <p>Дата создание аккаунта: 10.11.2023 г.</p>
            </div>
            <div className={styles.profileSettingRightBottomData}>
              <p>{<EmailOutlinedIcon />}</p>
              <p>bekkozha.ayan@mail.ru</p>
            </div>
            <div className={styles.profileSettingRightBottomData}>
              <p>{<TransgenderOutlinedIcon />}</p>
              <p>Мужской</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoChannel;
