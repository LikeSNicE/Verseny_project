import React, { useState } from "react";
import styles from "./MyChannel.module.scss";
import TooltipCustom from "../../Components/ToolTipCustom/ToolTipCustom";
import ModalCustom from "../../Components/Modal/Modal";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import imgEdit from "../../assets/images/icons/Edit.svg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import * as Muicon from "@mui/icons-material";
import TabConcurs from "./Tabs/TabConcurs";
import InputAvatarModal from "../../Components/ModalComponents/InputAvatarModal/InputAvatarModal";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../..";
import { isFileByUrl } from "../../Common/Table/isFileByUrl/isFileToUrl";

const MyChannel = () => {

  const VersenyLogo = Muicon["CampaignOutlined"];
  const ListFeautes = Muicon["ListAltOutlined"];

  const {Authstore} = useContext(Context)
  const {name,nickname,avatar,header,subcribers,description} = Authstore.user

  const DataTabs = [
    {
      id: 1,
      label: "Конкурсы",
      value: <TabConcurs />,
      icon: <VersenyLogo />,
    },
    {
      id: 2,
      label: "Подробности",
      value: description,
      icon: <ListFeautes />,
    },
  ];

  console.log(description)

  // header default image
  // const isFileByUrl = (filename) => {
  //   const typeFilesImage = ['jpg','jpeg','png'];
  //   return typeFilesImage.includes(filename.split('.').pop());
  // }

  return (
    <div className={styles.sectionChannel}>
      <div className={styles.profileBanner}>
        <img
          className={styles.profileBannerImg}
          src={
            isFileByUrl(header)
              ? header
              : "https://klike.net/uploads/posts/2022-12/1671597724_3-61.jpg"
          }
          alt="profile header_photo"
        />
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
              >
                (
                <img
                  className={styles.profileSectionInfoLeftImg}
                  src={avatar}
                  alt=""
                />
                )
              </Button>
            </div>
            <div className={styles.profileSectionInfoLeftText}>
              <p className={styles.profileSectionInfoLeftTextName}>{name}</p>
              <p className={styles.profileSectionInfoLeftTextSubcribers}>
                {subcribers} подписчиков
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
          <TabsCustom dataTabs={DataTabs} />
        </div>
      </div>
    </div>
  );
};

export default observer(MyChannel);
