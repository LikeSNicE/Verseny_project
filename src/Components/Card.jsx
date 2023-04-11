 import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import styles from "./Card.module.scss";
import { tagsColors } from "./styles/vars-colors/varsColors";
import { Titles } from "../theme";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";

const CardItem = (props) => {
  const {
    title,
    poster,
    authorAvatar,
    authorName,
    startDate,
    endDate,
    nameOfSilence,
    iconType,
  } = props;
  const { h6 } = Titles;
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={poster}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="h6" className={styles.cardTitle}>
            {title}
          </Typography>
          <Box display="flex" alignItems="center">
            <Avatar
              sx={{
                mr: "15px",
              }}
              src={authorAvatar}
            />
            <Typography fontWeight={"bold"} fontSize={h6}>
              {authorName}
            </Typography>
          </Box>
          <Typography fontSize={h6} mt="15px" fontWeight={700}>
            {startDate} - {endDate}
          </Typography>
          <div className={styles.cardInvolve}>
            <Typography mt={"10px"}>Тип участия: </Typography>
            <div className={styles.cardInvolveTitleRight}>
              <div className={styles.cardInvolveTitleRightIcon}>{iconType}</div>
              Фото
            </div>
          </div>
          <Stack direction={"row"} alignItems="end" sx={{ mt: "10px" }}>
            <PeopleOutlineIcon sx={{ mr: "7px" }} />
            <p>20</p>
          </Stack>
          <Typography
            fontSize={h6}
            sx={{
              background: tagsColors.four,
              padding: "5px 8px",
              borderRadius: "10px",
              color: "#fff",
              mt: "10px",
            }}
          >
            {nameOfSilence}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardItem;
