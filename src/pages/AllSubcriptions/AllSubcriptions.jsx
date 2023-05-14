import React, { useState } from "react";
import styles from "./AllSubcriptions.module.scss";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SearchInputCustom from "../../Components/SeacrhInput/SearchInput";
import { Avatar,Typography } from "@mui/material";
import { Route, Routes, NavLink, Link, useParams } from "react-router-dom";
import * as Muicon from "@mui/icons-material";
import EmptySub from "./emptySub/emptySub";

import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";

import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import TabItemFirst from "./Tabs/TabItemFirst";

const arraySubcriptions = [
  {
    id: 1,
    nameCompany: "Ubisoft",
    subcriptions: 30467,
    path: "/all-sub/ubisoft",
    avatarCompany:
      "https://i.pinimg.com/564x/aa/79/53/aa79530eb4a9010a9f33232965a0ac8d.jpg",
  },
  {
    id: 2,
    nameCompany: "Capcom",
    subcriptions: 20,
    path: "/test/capcom",
    avatarCompany:
      "https://i.pinimg.com/564x/62/2c/71/622c71753feaa14bc85343844ea159e0.jpg",
  },
  {
    id: 3,
    nameCompany: "EA",
    subcriptions: 20000,
    path: "/test/ea",
    avatarCompany:
      "https://i.pinimg.com/564x/19/a7/c5/19a7c5cd859bb28ef368ee077335dbfb.jpg",
  },
];

export const dataCard = [
  {
    term: {
      icon: "ErrorOutlineOutlined",
      //ErrorOutlineOutlined
      //CheckCircleOutlined
      message: "Конкурс окончен",
      state: "Success",
    },
    concurs: {
      img: "https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg",
      name: "Конкурс открытки «Герои сказок А. С. Пушкина поздравляют с Новым годом и Рождеством»",
      type: {
        text: "Фото",
        icon: "InsertPhotoOutlined",
      },
      participant: 20,
      category: {
        text: "Гуманитарные науки",
        color: "#F8B84A",
      },
    },
    author: {
      avatar:
        "https://images-ext-1.discordapp.net/external/_DY1anSP2XlAmXYBaMmEcmqza9Wa_yVtbdZy4tBHvoU/%3Fs%3D400%26u%3D6c92f6fc049c598f01fa6554b575c74dbf789e07%26v%3D4%2522%2C/https/avatars.githubusercontent.com/u/85344443",
      name: "Ubisoft",
      link: "/channel/@Ubisoft",
    },
  },
];

const DataTabs = [
  {
    id: 1,
    label: "Конкурсы",
    value: <TabItemFirst />,
  },
  {
    id: 2,
    label: "Подробности",
    value: "Hello",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className={styles.tabPanel}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className={styles.tabPanelValue}>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
}

const AllSubcriptions = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "700" : "400",
      borderRadius: isActive ? "15px" : null,
      color: isActive ? "black" : "",
      backgroundColor: isActive ? "#ccc" : null,
      display: isActive ? "block" : "",
      width: isActive ? "330px" : "370px",
    };
  };

  const [data, setData] = useState(arraySubcriptions);

  return (
    <div className={styles.sectionSubscription}>
      <div className={styles.sectionSubscriptionList}>
        <div className={styles.sectionSubscriptionListTop}>
          <span>
            <SubscriptionsOutlinedIcon />
          </span>
          <div className={styles.sectionSubscriptionListTopTitle}>Подписки</div>
        </div>

        <div className={styles.sectionSubscriptionListSearch}>
          <SearchInputCustom label="Поиск" />
        </div>

        <div className={styles.sectionSubscriptionListChannels}>
          {arraySubcriptions.map((item, index) => (
            <NavLink
              key={index}
              onClick={() => setData(item)}
              style={navLinkStyles}
              className={styles.sectionSubscriptionListChannelsLink}
              to={"/allSubcription/" + item.id}
            >
              <div className={styles.sectionSubscriptionListChannelsItem}>
                <div className={styles.sectionSubscriptionListChannelsItemImg}>
                  <Avatar src={item.avatarCompany} alt="company avatar" />
                </div>
                <div
                  className={
                    styles.sectionSubscriptionListChannelsItemCompanyInfo
                  }
                >
                  <div
                    className={styles.sectionSubscriptionListChannelsItemName}
                  >
                    {item.nameCompany}
                  </div>
                  <div
                    className={
                      styles.sectionSubscriptionListChannelsItemSubCount
                    }
                  >
                    {item.subcriptions} подписчиков
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className={styles.sectionSubscriptionInfoChannel}>
        <Routes>
          <Route index element={<EmptySub />} />
          <Route
            path=":id"
            element={<SubDetails getValue={data} arr={arraySubcriptions} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default AllSubcriptions;

const SubDetails = ({ getValue }) => {
  //const [value, setValue] = React.useState(0);
  const { id } = useParams();
  console.log(id);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className={styles.sectionSubInfoChannel}>
      <div className={styles.sectionSubInfoChannelTop}>
        <div className={styles.sectionSubInfoChannelTopLeft}>
          <Link to={"/channel/id/all-concurs"}>
            <div>
              <Avatar src={getValue.avatarCompany} alt="photo" />
            </div>
            <div>
              <p>{getValue.nameCompany}</p>
              <p>{getValue.subcriptions} подписчиков</p>
            </div>
          </Link>
        </div>
        <div className={styles.sectionSubInfoChannelTopRight}>
          <div>
            <ButtonCustom>Вы подписаны</ButtonCustom>
          </div>
        </div>
      </div>

      <div>
        <TabsCustom dataTabs={DataTabs}/>
      </div>
    </div>
  );
};

export { SubDetails };
