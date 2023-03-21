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
} from "@mui/material";
import React, { useState } from "react";
import styles from "./Header.module.scss";
import IconButton from "@mui/material/IconButton";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";
import Logo from "../../assets/images/header/logo.svg";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { createTheme, ThemeProvider } from "@mui/material";
import {Link} from "react-router-dom";
import CustomLink from "../Common/CutsomLink/CustomLink";

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
const Header = () => {
  //tabs
  // const [tab, setTab] = useState(0);
  // const handleChangeTabs = (event, newValue) => {
  //   setTab(newValue);
  // };

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
              //value={tab}
              //onChange={handleChangeTabs}
              aria-label="icon position tabs example"
              indicatorColor="primary"
            >
              <Tab
                component={Link}
                value="/"
                to="/"
                icon={<HomeIcon />}
                iconPosition="top"
                label="Главная"
              />
              <Tab
                component={Link}
                value="/myconcurs"
                to="/myconcurs"
                icon={<CampaignIcon />}
                iconPosition="top"
                label="Мои конкурсы"
              />
            </Tabs>
            {/* <RouterLink to={"/"}>
                <Tab icon={<HomeIcon />} iconPosition="start" label="Главная" />
              </RouterLink>
              <RouterLink to={"/profileInfoChannel"}>
                <Tab
                  icon={<CampaignIcon />}
                  iconPosition="start"
                  label="Мои конкурсы"
                />
              </RouterLink> */}
            {/* <CustomLink to={"/"} chidren={"Главная"} /> */}
            {/* {/* <CustomLink to={"/profileInfoChannel"} chidren={"Мои консурсы"} /> */}

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
            aria-aria-labelledby="demo-positioned-button"
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
                <ListItemIcon>
                  <SettingsOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography>
                  <CustomLink
                    to={"/profileDetails"}
                    chidren="Настройка аккаунта"
                  />
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => setIsOpen(false)}>
                <ListItemIcon>
                  <ExitToAppOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Typography>Выйти</Typography>
              </MenuItem>
            </div>
          </Menu>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;