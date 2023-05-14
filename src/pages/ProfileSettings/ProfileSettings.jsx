import React, { useState } from "react";
import { Button, IconButton } from "@mui/material";

import { Link, Routes, Route, useLocation, Navigate } from "react-router-dom";
import imgEdit from "../../assets/images/icons/Edit.svg";
import styles from "./ProfileSettings.module.scss";
import SettingUser from "../settingUser/settingUser";
import SettingChannel from "../settingChannel/settingChannel";
import ModalDeleteAccount from "../ModalDeleteAccount/ModalDeleteAccount";
import TooltipCustom from "../../Components/ToolTipCustom/ToolTipCustom";
import ModalCustom from "../../Components/Modal/Modal";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import TabsCustom from "../../Components/TabsNavCustom/TabsNavCustom";
import * as Muicon from "@mui/icons-material";

const ProfileInfoChannel = () => {
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  if (location.pathname === "/profileInfoChannel/setting") {
    return <Navigate to={"/profileInfoChannel/setting/user"} />;
  }

  // icons
  const AirplayOutlinedIcon = Muicon["AirplayOutlined"];
  const AlternateEmailOutlinedIcon = Muicon["AlternateEmailOutlined"];
  const CardGiftcardOutlinedIcon = Muicon["CardGiftcardOutlined"];
  const EmailOutlinedIcon = Muicon["EmailOutlined"];
  const PersonOutlineOutlinedIcon = Muicon["PersonOutlineOutlined"];
  const EditOutlinedIcon = Muicon["EditOutlined"];

  return (
    <div className={styles.profile}>
      {/*profile header*/}
      <div className={styles.profileBanner}>
        <img
          src="https://pbs.twimg.com/media/D6H3CT0WwAA5_yg.jpg"
          alt="profile header_photo"
        />
        <ModalCustom
          rootClass={styles.profileBannerEditBtn}
          iconTopSection={<EditOutlinedIcon />}
          iconTopSectionStyles={styles.modalSectionTopIcon}
          iconTopSectiontext="Изменить баннер"
          btnStyles={styles.editBtn}
          btnLabel="Изменить баннер"
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
            >
              (
              <img
                className={styles.profileSectionInfoLeftImg}
                src="https://cybersport.metaratings.ru/storage/images/e6/ee/e6ee248b4bceb7fdf71a74871f8a0425.jpg"
                alt=""
              />
              )
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
                  <Link to="/mychannel">
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
              <TabsCustom
                className={styles.profileSettingRightTopDataIcon}
                to={"setting/user"}
                children={"Профиль"}
              >
                <PersonOutlineOutlinedIcon />
                Профиль
              </TabsCustom>
            </div>
            <div className={styles.profileSettingRightTopData}>
              <TabsCustom
                className={styles.profileSettingRightTopDataIcon}
                to={"setting/channel"}
              >
                <AirplayOutlinedIcon />
                Канал
              </TabsCustom>
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
              <p>{<PersonOutlineOutlinedIcon />}</p>
              <p>Мужской</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoChannel;
