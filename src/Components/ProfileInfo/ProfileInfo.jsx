import React, { useState, useRef } from "react";
import {
  Box,
  styled,
  Typography,
  Button,
  Avatar,
  Tabs,
  Tab,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
  OutlinedInput,
  useTheme,
  IconButton,
  Tooltip,
  TooltipClasses,
  tooltipClasses,
  TextField,
  Divider,
} from "@mui/material";

import { Titles } from "../../theme";
import { ButtonColors } from "../styles/vars-colors/varsColors";
import ShareIcon from "@mui/icons-material/Share";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import CardItem from "../../Common/Card";

// new
import {
  ButtonIconText,
  ButtonIconTextFile,
} from "../../Common/ButtonIconText/ButtonIconText";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TransgenderOutlinedIcon from "@mui/icons-material/TransgenderOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import { Link } from "react-router-dom";
import { CustomLinkIcon } from "../../Common/CutsomLink/CustomLink";
import imgEdit from "../../assets/images/icons/Edit.svg";
import styles from "./ProfileInfo.module.scss";

const ProfileInfoChannel = () => {
  let [hovered, setHovered] = useState(false);

  // new
  // Tooltip
  const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} placement="top" />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));

  return (
    <div className={styles.profile}>
      {/*profile header*/}
      <div className={styles.profileBanner}>
        <img
          src="https://pbs.twimg.com/media/D6H3CT0WwAA5_yg.jpg"
          alt="profile header_photo"
        />
        <ButtonIconText
          startIcon={<EditOutlinedIcon />}
          children={"Изменить обложку"}
          isFile={true}
          className={styles.profileBannerEditBtn}
        />
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
            <Link to={"/"}>
              <ButtonIconText
                startIcon={<EditOutlinedIcon />}
                children={"Редактировать профиль"}
                className={styles.profileSectionInfoRightIconEdit}
              />
            </Link>
          </div>
          <div>
            <Button className={styles.profileSectionInfoRightIconChannel}>
              <BootstrapTooltip title="Мой канал">
                <Link>
                  <AirplayOutlinedIcon />
                </Link>
              </BootstrapTooltip>
            </Button>
          </div>
          <div>
            <IconButton className={styles.profileSectionInfoRightIconDelete}>
              <BootstrapTooltip title="Удалить канал">
                <Link>
                  <DeleteOutlineOutlinedIcon />
                </Link>
              </BootstrapTooltip>
            </IconButton>
          </div>
        </div>
      </div>

      <div className={styles.profileSetting}>
        {/*Setting user left*/}
        <div className={styles.profileSettingLeft}>
          <div className={styles.profileSettingLeftTitle}>
            <div className={styles.profileSettingLeftTitleIcon}>
              {<Diversity3OutlinedIcon />}
            </div>
            <div className={styles.profileSettingLeftTitleSubtitle}>
              Профиль
            </div>
          </div>

          <div className={styles.profileSettingLeftField}>
            <div className={styles.profileSettingLeftFieldName}>Имя:</div>
            <div>
              <TextField
                className={styles.profileSettingLeftFieldInput}
                fullWidth
                type="search"
                placeholder="Имя"
              ></TextField>
            </div>
          </div>

          <div className={styles.profileSettingLeftField}>
            <div className={styles.profileSettingLeftFieldName}>Фамилия:</div>
            <div>
              <TextField
                className={styles.profileSettingLeftFieldInput}
                fullWidth
                type="search"
                placeholder="Фамилия:"
              ></TextField>
            </div>
          </div>

          <div className={styles.profileSettingLeftField}>
            <div className={styles.profileSettingLeftFieldName}>Почта:</div>
            <div>
              <TextField
                className={styles.profileSettingLeftFieldInput}
                fullWidth
                type="search"
                placeholder="bekkozha.ayan@mail.ru"
              ></TextField>
            </div>
          </div>
        </div>
        {/*Setting user right*/}
        <div className={styles.profileSettingRight}>
          <div className={styles.profileSettingRightChildren}>
            <h3>Личные данные</h3>
            <div className={styles.profileSettingRightChildrenData}>
              <CustomLinkIcon
                to={"/ddd"}
                children={"Мужской"}
                Icon={<TransgenderOutlinedIcon />}
                className={styles.profileSettingRightChildrenDataIcon}
              ></CustomLinkIcon>
            </div>
            <div className={styles.profileSettingRightChildrenData}>
              <CustomLinkIcon
                to={"/ddd"}
                children={"Канал"}
                Icon={<AirplayOutlinedIcon />}
                className={styles.profileSettingRightChildrenDataIcon}
              ></CustomLinkIcon>
            </div>
          </div>

          <div className={styles.profileSettingRightChildren}>
            <h3>Подробная информация</h3>
            {/* <Divider /> */}
            <div className={styles.profileSettingRightChildrenData}>
              <p>{<AlternateEmailOutlinedIcon />}</p>
              <p>id_1</p>
            </div>
            <div className={styles.profileSettingRighChildrentData}>
              <p>{<CardGiftcardOutlinedIcon />}</p>
              <p>Дата создание аккаунта: 10.11.2023 г.</p>
            </div>
            <div className={styles.profileSettingRightChildrenData}>
              <p>{<EmailOutlinedIcon />}</p>
              <p>bekkozha.ayan@mail.ru</p>
            </div>
            <div className={styles.profileSettingRightChildrenData}>
              <p>{<TransgenderOutlinedIcon />}</p>
              <p>Мужской</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    //  {/*Box Main*/}
    // <Box>
    //   {/* Header Channel */}
    //   <BoxHeaderChannel>
    //     <img src={"https://pbs.twimg.com/media/D6H3CT0WwAA5_yg.jpg"} alt="" />
    //   </BoxHeaderChannel>

    //   {/* header info*/}
    //   <Box
    //     display="flex"
    //     justifyContent="space-between"
    //     alignItems="center"
    //     sx={{
    //       boxShadow: "box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25)",
    //       //border: "1px solid #000",
    //       padding: "20px 30px 0",
    //     }}
    //   >
    //     {/* header info left*/}
    //     <Box display="flex">
    //       <Avatar
    //         src={
    //           "https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"
    //         }
    //         alt="Avatar Small Header"
    //         sx={{ mr: "10px" }}
    //       />
    //       <Box>
    //         <Typography variant="h6" fontWeight="bold">
    //           Ubisoft
    //         </Typography>
    //         <p>30 подписчиков</p>
    //       </Box>
    //     </Box>
    //     {/* header info right*/}
    //     <Box display="flex" alignItems="center">
    //       <Button
    //         variant="contained"
    //         component="label"
    //         sx={{
    //           background: ButtonColors.one,
    //           mr: "25px",
    //           borderRadius: "15px",
    //         }}
    //       >
    //         <ShareIcon />
    //       </Button>
    //       <Button
    //         variant="contained"
    //         component="label"
    //         sx={{
    //           borderRadius: "15px",
    //           background: ButtonColors.two,
    //         }}
    //       >
    //         Подписаться
    //       </Button>
    //     </Box>
    //   </Box>
    //   <Tabs
    //     value={tab}
    //     onChange={handleChangeTabs}
    //     aria-label="icon position tabs example"
    //     textColor="primary"
    //     indicatorColor="primary"
    //   >
    //     <Tab
    //       icon={<CampaignOutlinedIcon />}
    //       iconPosition="start"
    //       label="Конкурсы"
    //     />
    //     <Tab
    //       icon={<ListAltOutlinedIcon />}
    //       iconPosition="start"
    //       label="Подробности"
    //     />
    //   </Tabs>

    //   <Box
    //     display="flex"
    //     justifyContent="space-between"
    //     alignItems="center"
    //     mt="40px"
    //   >
    //     {/*Typography and  Select left */}
    //     <Box display="flex" alignItems="center">
    //       <Typography variant="h3" fontSize={Titles.h3} sx={{ mr: "25px" }}>
    //         Показать
    //       </Typography>

    //       <FormControl sx={{ m: 1, minWidth: 200 }}>
    //         <InputLabel id="demo-simple-select-helper-label">
    //           Новинка
    //         </InputLabel>
    //         <Select
    //           labelId="demo-simple-select-helper-label"
    //           id="demo-simple-select-helper"
    //           value={date}
    //           label=" Новинка"
    //           onChange={handleChangeDate}
    //         >
    //           <MenuItem value="">
    //             <em>None</em>
    //           </MenuItem>
    //           <MenuItem value={10}>Ten</MenuItem>
    //           <MenuItem value={20}>Twenty</MenuItem>
    //           <MenuItem value={30}>Thirty</MenuItem>
    //         </Select>
    //       </FormControl>
    //     </Box>

    //     <div>
    //       <FormControl sx={{ m: 1, width: 300 }}>
    //         <InputLabel id="demo-multiple-chip-label">Выб Тип</InputLabel>
    //         <Select
    //           labelId="demo-multiple-chip-label"
    //           id="demo-multiple-chip"
    //           multiple
    //           value={personName}
    //           onChange={handleChange}
    //           input={
    //             <OutlinedInput id="select-multiple-chip" label="Выб Тип" />
    //           }
    //           renderValue={(selected) => (
    //             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
    //               {selected.map((value) => (
    //                 <Chip key={value} label={value} />
    //               ))}
    //             </Box>
    //           )}
    //           MenuProps={MenuProps}
    //         >
    //           {names.map((name) => (
    //             <MenuItem
    //               key={name}
    //               value={name}
    //               style={getStyles(name, personName, theme)}
    //             >
    //               {name}
    //             </MenuItem>
    //           ))}
    //         </Select>
    //       </FormControl>
    //     </div>
    //   </Box>

    //   <Box>
    //     {initialState.buttons.map((button, index) => (
    //       <Button
    //         onClick={(id) => {}}
    //         variant="outlined"
    //         key={button.id}
    //         sx={{
    //           mt: "35px",
    //           "& + &": {
    //             ml: "15px",
    //           },
    //         }}
    //       >
    //         {button.title}
    //       </Button>
    //     ))}
    //   </Box>

    //   <Box
    //     sx={{
    //       mt: "45px",
    //       display: "grid",
    //       gridTemplateColumns: "repeat(4,1fr)",
    //       gridGap: "20px",
    //     }}
    //   >
    //     <CardItem
    //       title="Lizard"
    //       poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorName="Ubisoft"
    //       startDate="2 февраля 2022 "
    //       endDate="20 февраля 2022 "
    //       nameOfSilence="Гумманитарные науки"
    //       iconType={<ImageOutlinedIcon />}
    //     />

    //     <CardItem
    //       title="Lizard"
    //       poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorName="Ubisoft"
    //       startDate="2 февраля 2022 "
    //       endDate="20 февраля 2022 "
    //       nameOfSilence="Гумманитарные науки"
    //       iconType={<ImageOutlinedIcon />}
    //     />

    //     <CardItem
    //       title="Lizard"
    //       poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorName="Ubisoft"
    //       startDate="2 февраля 2022 "
    //       endDate="20 февраля 2022 "
    //       nameOfSilence="Гумманитарные науки"
    //       iconType={<ImageOutlinedIcon />}
    //     />

    //     <CardItem
    //       title="Lizard"
    //       poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
    //       authorName="Ubisoft"
    //       startDate="2 февраля 2022 "
    //       endDate="20 февраля 2022 "
    //       nameOfSilence="Гумманитарные науки"
    //       iconType={<ImageOutlinedIcon />}
    //     />
    //   </Box>
    // </Box>
  );
};

export default ProfileInfoChannel;
