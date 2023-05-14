import {
  AppBar,
  Avatar,
  Box,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  Divider,
  Stack,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import { Link, useLocation, Navigate } from "react-router-dom";
import { CustomLinkIcon } from "../../Components/CutsomLink/CustomLink";
import ButtonCustom from "../../Components/ButtonCustom/ButtonCustom";
import IconButton from "@mui/material/IconButton";
import Logo from "../../assets/images/icons/logo.svg";
import * as Muicon from "@mui/icons-material";


const ToolBarStyled = styled(Toolbar)({
  background: "#fff",
  color: "#000",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  fontWeight: 300,
});

// custom theme

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: ["Comfortaa", "cursive"].join(","),
  },
});

function getRouteIndex(pathname) {
  switch (pathname) {
    case "/":
      return 0;
    case "/myconcurs":
      return 1;
    case "/allSubcription":
      return 2;
    case "/mychannel":
      return 3;
    default:
      return 0;
  }
}

const Header = ({login}) => {
  //tabs
  const location = useLocation();
  const index = getRouteIndex(location.pathname);

  const handleChangeTabs = (newValue) => {
    // setTab(newValue);
    switch (newValue) {
      case 0:
        return Navigate("/");
      case 1:
        return Navigate("/myconcurs");
      case 2:
        return Navigate("/allSubcription");
      case 3:
        return Navigate("/mychannel");
      default:
        return null;
    }
  };

  // menu profile
  const [isOpen, setIsOpen] = useState(false);

  const CampaignIcon = Muicon["CampaignOutlined"];
  const HomeIcon = Muicon["HomeOutlined"];
  const SettingIcon = Muicon["SettingsOutlined"];
  const ExitToAppIcon = Muicon["ExitToAppOutlined"];
  const SubscriptionIcon = Muicon["SubscriptionsOutlined"]
  const AirplayOutlinedIcon = Muicon["AirplayOutlined"];


  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mb: "40px" }}>
        {login ? (
          <AppBar position="static">
            <ToolBarStyled>
              <IconButton>
                <Avatar src={Logo} />
              </IconButton>
              <Tabs
                value={index}
                onChange={handleChangeTabs}
                aria-label="icon position tabs example"
                indicatorColor="primary"
              >
                <Tab
                  component={Link}
                  to="/"
                  value={0}
                  icon={<HomeIcon />}
                  iconPosition="top"
                  label="Главная"
                />
                <Tab
                  component={Link}
                  to="/myconcurs"
                  value={1}
                  icon={<CampaignIcon />}
                  iconPosition="top"
                  label="Мои конкурсы"
                />
                <Tab
                  component={Link}
                  to="/allSubcription"
                  value={2}
                  icon={<SubscriptionIcon />}
                  iconPosition="top"
                  label="Подписки"
                />
                <Tab
                  component={Link}
                  to="/mychannel"
                  value={3}
                  icon={<AirplayOutlinedIcon />}
                  iconPosition="top"
                  label="Мой канал"
                />
              </Tabs>

              <Avatar
                onClick={(e) => setIsOpen(true)}
                src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"
                sx={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                }}
              />
            </ToolBarStyled>

            {/* Menu of profile*/}

            <Menu
              className={styles.menuProfile}
              id="basic-menu"
              aria-labelledby="demo-positioned-button"
              open={isOpen}
              onClose={(e) => setIsOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "top",
              }}
              sx={{
                mt: "3em",
              }}
            >
              <Stack className={styles.menuProfileBox}>
                <div className={styles.menuProfileBoxLeft}>
                  <Typography className={styles.menuProfileBoxLeftAuthor}>
                    Луценко Никита
                  </Typography>
                  <Typography
                    fontWeight={"bold"}
                    className={styles.menuProfileBoxLeftCompany}
                  >
                    Ubisoft1
                  </Typography>
                </div>
                <div>
                  <Avatar src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4" />
                </div>
              </Stack>
              <Divider />
              <div className={styles.menuProfileItems}>
                <MenuItem onClick={() => setIsOpen(false)}>
                  <CustomLinkIcon
                    to={"/profileInfoChannel/setting/user"}
                    children={"Настройка аккаунта"}
                    Icon={<SettingIcon />}
                    className={styles.menuProfileItemLink}
                  ></CustomLinkIcon>
                </MenuItem>
                <MenuItem onClick={() => setIsOpen(false)}>
                  <CustomLinkIcon
                    to={"/ddd"}
                    children={"Выйти"}
                    Icon={<ExitToAppIcon />}
                    className={styles.menuProfileItemLink}
                  ></CustomLinkIcon>
                </MenuItem>
              </div>
            </Menu>
          </AppBar>
        ) : (
          <div className={styles.sectionLogin}>
            <AppBar position="static">
              <ToolBarStyled className={styles.sectionLoginToolBar}>
                <ButtonCustom className={styles.sectionLoginBtnLogin}>
                  <Link to="/login">Войти</Link>
                </ButtonCustom>
                <ButtonCustom
                  className={styles.sectionLoginBtnRegistration}
                  variant="outlined"
                >
                  <Link to="/signin">Регистация</Link>
                </ButtonCustom>
              </ToolBarStyled>
            </AppBar>
          </div>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default Header;
