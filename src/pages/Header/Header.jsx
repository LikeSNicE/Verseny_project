import {
  AppBar,
  Avatar,
  Box,
  styled,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Stack,
  Tabs,
  Tab,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import IconButton from "@mui/material/IconButton";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../../assets/images/header/logo.svg";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import { Link, useLocation, Navigate } from "react-router-dom";
import { CustomLinkIcon } from "../../Components/CutsomLink/CustomLink";

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
    case "/profileDetails":
      return 2;
    case "/profileInfoChannel":
      return 3;
    default:
      return 0;
  }
}

const Header = () => {
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
        return Navigate("/profileDetails");
      case 3:
        return Navigate("/profileInfoChannel");
      default:
        return null;
    }
  };

  // menu profile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ mb: "40px" }}>
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
                to="/profileDetails"
                value={2}
                icon={<SubscriptionsOutlinedIcon />}
                iconPosition="top"
                label="Подписки"
              />
              <Tab
                component={Link}
                to="/profileInfoChannel"
                value={3}
                icon={<AirplayOutlinedIcon />}
                iconPosition="top"
                label="Мой канал"
              />
            </Tabs>

            {/* <div>
              {pages.map((page, index) => (
                <MenuItem key={index}>
                  <Link>{page}</Link>
                </MenuItem>
              ))}
            </div> */}

            {/* <Tabs value={index} onChange={handleChange}>
              <Tab label="Home" component={Link} to="/" />
              <Tab label="About" component={Link} to="/about" />
              <Tab label="Contact" component={Link} to="/contact" />
            </Tabs> */}

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
                  Ubisoft
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
                  to={"/profileDetails"}
                  children={"Настройка аккаунта"}
                  Icon={<SettingsOutlinedIcon />}
                  className={styles.menuProfileItemLink}
                ></CustomLinkIcon>
              </MenuItem>
              <MenuItem onClick={() => setIsOpen(false)}>
                <CustomLinkIcon
                  to={"/ddd"}
                  children={"Выйти"}
                  Icon={<ExitToAppOutlinedIcon />}
                  className={styles.menuProfileItemLink}
                ></CustomLinkIcon>
              </MenuItem>
            </div>
          </Menu>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;