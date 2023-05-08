import React, { useState } from "react";
import styles from "./testPages.module.scss";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import SearchInputCustom from "../../Components/SeacrhInput/SearchInput";
import TabsCustom from "../../Components/TabsCustom/TabsCustom";
import { Avatar, Tabs, Tab, Typography } from "@mui/material";
import unSub from "../../assets/images/subscription/unsub.svg";
import { Route, Routes, useLocation, NavLink, Link } from "react-router-dom";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import * as Muicon from "@mui/icons-material";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import CardCustom from "../../Components/Card/Card";

const arraySubcriptions = [
  {
    id: 1,
    nameCompany: "Ubisoft",
    subcriptions: 30467,
    path: "/test/ubisoft",
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

const dataForCard = [
  {
    backgroundTop: "rgba(114, 114, 216, 0.5)",
    iconStatus: <Muicon.AccessTimeOutlined />,
    statusText: "Через 10 часов",
    posterCard:
      "https://mobimg.b-cdn.net/v3/fetch/54/54e7919c1cfb738311b2bad4e510bb89.jpeg",
    titleCard: "Конкурс открытки «Герои сказок А.Cdsadasdasdadadsaddddd",
    photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
    nameAuthor: "Ubisoft",
    iconType: <Muicon.ImageOutlined />,
    textType: "Фото",
    countUser: "100",
  },
  {
    backgroundTop: "rgba(114, 114, 216, 0.5)",
    iconStatus: <Muicon.AccessTimeOutlined />,
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
    iconStatus: <Muicon.AccessTimeOutlined />,
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
    backgroundTop: "green",
    iconStatus: <Muicon.AccessTimeOutlined />,
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

const TestPages = () => {
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

  const [data, setData] = useState([]);

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
              to={"/test/" + item.id}
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
          <Route
            index
            element={
              <div>
                <img src={unSub} alt="unSub" />
                <div className={styles.sectionSubscriptionInfoChannelTitle}>
                  Вы в первый раз зашли?
                </div>
                <div className={styles.sectionSubscriptionInfoChannelSubtitle}>
                  В этом окошке вы можете просмотреть и оценивать кандидатовВ
                  этом окошке вы можете просмотреть и оценивать кандидатов
                </div>
              </div>
            }
          />
          <Route path="/:id" element={<TestPages1 getValue={data} />} />
        </Routes>
      </div>
    </div>
  );
};

export default TestPages;

const TestPages1 = ({ getValue }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.sectionSubInfoChannel}>
      <div className={styles.sectionSubInfoChannelTop}>
        <div className={styles.sectionSubInfoChannelTopLeft}>
          <Link to={"/channel/id/all-concurs"}>
            <div>
              <Avatar
                src={getValue.avatarCompany}
                alt="photo"
              />
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
        <div>
          <Tabs
            className={styles.tabs}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab className={styles.tabsItem} label="Конкурсы" />
            <Tab className={styles.tabsItem} label="Подробности" />
          </Tabs>
        </div>
        <TabPanel value={value} index={0}>
          <FilterBlockCustom />
          <div className={styles.sectionSubInfoChannelConcurs}>
            {dataForCard.map((item, index) => (
              <CardCustom key={index} {...item} />
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export { TestPages };
