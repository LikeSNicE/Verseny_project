import React from "react";
import styles from "./myConcurs.module.scss";
import CardCustom from "../../Components/Card/Card";
import FilterBlockCustom from "../../Components/FilterBlock/FilterBlock";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import ModalCustom from "../../Components/Modal/Modal";
import TableUI from "../../Common/Table/Table";

const MyConcurs = () => {
  // card
  const dataForCard = [
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },

    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },
    {
      backgroundTop: "rgba(114, 114, 216, 0.5)",
      iconStatus: <AccessTimeOutlinedIcon />,
      statusText: "Через 10 часов",
      posterCard:
        "https://pbs.twimg.com/media/FWw6puNWQAEhQ29?format=jpg&name=large",
      titleCard: "Конкурс открытки «Герои сказок А.C",
      photoAuthor: "https://avatars.githubusercontent.com/u/85344443?s=64&v=4",
      nameAuthor: "Ubisoft",
      iconType: <ImageOutlinedIcon />,
      textType: "Фото",
      countUser: "100",
    },
  ];

  const headData = ["Место", "Приз", "Участники"];
  const dataTable = [
    [
      {
        PlaceIcon: "1",
      },
      {
        AboutFile: ["100000 тенге"],
      },
      {
        //import Avatar from './UI/User/Avatar';
        Avatar: {
          photo:
            "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139%22,",
          alt: "logo",
          name: "Беккожа Аян",
          email: "bekkozha.ayan@mail.ru",
        },
      },
    ],
    [
      {
        PlaceIcon: "2",
      },
      {
        AboutFile: ["50000 тенге"],
      },
      {
        //import Avatar from './UI/User/Avatar';
        Avatar: {
          photo:
            "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139%22,",
          alt: "logo",
          name: "Беккожа Аян",
          email: "bekkozha.ayan@mail.ru",
        },
      },
    ],
    [
      {
        PlaceIcon: "3",
      },
      {
        AboutFile: ["25000 тенге"],
      },
      {
        //import Avatar from './UI/User/Avatar';
        Avatar: {
          photo:
            "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139%22,",
          alt: "logo",
          name: "Беккожа Аян",
          email: "bekkozha.ayan@mail.ru",
        },
      },
    ],
    [
      {
        PlaceIcon: "4",
      },
      {
        AboutFile: ["12500 тенге"],
      },
      {
        //import Avatar from './UI/User/Avatar';
        Avatar: {
          photo:
            "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139%22,",
          alt: "logo",
          name: "Беккожа Аян",
          email: "bekkozha.ayan@mail.ru",
        },
      },
    ],
    [
      {
        PlaceIcon: "5",
      },
      {
        AboutFile: ["6250 тенге"],
      },
      {
        //import Avatar from './UI/User/Avatar';
        Avatar: {
          photo:
            "https://vignette4.wikia.nocookie.net/steven-universe/images/0/08/Fusion_Cuisine_017.png/revision/latest?cb=20160709182139%22,",
          alt: "logo",
          name: "Беккожа Аян",
          email: "bekkozha.ayan@mail.ru",
        },
      },
    ],
  ];

  return (
    <div className={styles.myconcurs}>
      <div className={styles.myconcursTitle}>Ваши участия</div>
      <FilterBlockCustom />

      <div className={styles.myconcursInner}>
        {dataForCard.map((item, index) => (
          <CardCustom key={index} {...item} />
        ))}
      </div>
      {/* <ModalSeeWinners/> */}
      <ModalCustom
        icon={<ImageOutlinedIcon />}
        iconStyles={styles.modalSectionTopIcon}
        text="Open Modal"
        btnStyles={styles.editBtn}
        btnStartIcon={<ImageOutlinedIcon />}
        btnLabel="Open Modal"
        labelStyles={styles.modalSectionMain}
        heightModal="700px"
        label={
          <div>
            <img
              className={styles.modalSectionImg}
              src="https://mobimg.b-cdn.net/v3/fetch/04/04bbc582f281ec9c6a67139d1e228ff4.jpeg"
              alt="poster of concurs"
            />

            <div className={styles.myconcursTable}>
              <TableUI head={headData} data={dataTable} />
            </div>
          </div>
        }
      ></ModalCustom>
    </div>
  );
};

export default MyConcurs;
