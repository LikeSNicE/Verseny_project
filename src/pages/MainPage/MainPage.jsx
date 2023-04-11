import { Avatar, Box, Button, Typography } from '@mui/material';
import React from 'react';
import MainPhoto from '../../assets/images/header/main.jpg';
import Star from "../../assets/images/header/star.svg";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <Box
      sx={{
        mt: "40px",
      }}
    >
  
        <img src={MainPhoto} className={styles.MainPageImage} alt='' />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "40px",
          }}
        >
          <Typography
            sx={{
              width: "685px",
            }}
          >
            Конкурс открытки «Герои сказок А. С. Пушкина поздравляют с Новым
            годом и Рождеством»
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#F8B84A",
              borderRadius: "15px",
              "&:hover": {
                background: "#F8B84A",
              },
            }}
          >
            Гуманитарные науки
          </Button>
        </Box>

        <Box
          sx={{
            mt: "50px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography fontWeight={700}>Дата начало - конец : </Typography>
            <Typography color="#4A4A4E">
              2 февраля 2022 - 20 февраля 2022
            </Typography>
          </Box>

          <Button>
            <img src={Star} alt='' />
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "40px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Diversity3Icon />
            <Typography
              variant="h6"
              component={"span"}
              sx={{
                ml: "10px",
              }}
            >
              20 учасников
            </Typography>
          </Box>

          <Box>
            <Button
              variant="contained"
              startIcon={<InsertPhotoIcon />}
              sx={{
                background: "#9194C9",
                borderRadius: "15px",
                "&:hover": {
                  background: "#9194C9",
                },
              }}
            >
              Участвовать
            </Button>
          </Box>
        </Box>

        <Typography
          sx={{
            fontSize: "34px",
            fontWeight: "700",
            color: "#000",
          }}
        >
          Организатор
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "25px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Avatar src="https://avatars.githubusercontent.com/u/85344443?s=400&u=6c92f6fc049c598f01fa6554b575c74dbf789e07&v=4"></Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                ml: "5px",
              }}
            >
              <Typography>LikesNice</Typography>
              <Typography>1000000 подписчиков</Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                background: "#E8533F",
                borderRadius: "15px",
                "&:hover": {
                  background: "#E8533F",
                },
              }}
            >
              Подписаться
            </Button>
          </Box>
        </Box>

        <Typography
          sx={{
            mt: "10px",
          }}
          variant="h3"
        >
          Комментарий от Создателя
        </Typography>

        <Typography
          sx={{
            mt: "20px",
          }}
        >
          Объявлен Всероссийский конкурс по истории «Диалог времен».
          Интеллектуальное соревнование будет проходить в три этапа в
          онлайн-формате. Талантливые старшеклассники могут заработать своим
          умом от 100 до 250 тысяч рублей. До 26 декабря идет регистрация на
          Всероссийский конкурс по истории «Диалог времен» для учеников 8-11
          классов. Проект посвящен 350-летию со дня рождения императора Петра I,
          поэтому задания связаны с периодом его правления. Участие в конкурсе
          бесплатное!
        </Typography> 
    </Box>
  );
};

export default MainPage;