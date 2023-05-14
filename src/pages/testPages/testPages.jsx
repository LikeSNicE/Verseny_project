import { useState } from "react";
import Slider from "react-slick";
import TagButton from "../../Components/TagButton/TagButton";
import styles from "./testPages.module.scss";
import { Box, Tabs } from "@mui/material";
import ModalParticipate from "../../Components/ParticipateModal/ParticipateModal";

const TestPages = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const arrayTagButton = [
    { id: 1, name: "Все", color: "red" },
    { id: 2, name: "Точные науки", color: "red" },
    { id: 3, name: "Програмирования", color: "blue" },
    { id: 4, name: "Рисования", color: "gray" },
    { id: 5, name: "Гуманитарные науки", color: "orange" },
    { id: 6, name: "3D Модели", color: "purple" },
    { id: 7, name: "Эссе", color: "black" },
    { id: 8, name: "Сценарий", color: "green" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    // <Box
    //   sx={{
    //     maxWidth: {lg: 600},
    //     bgcolor: "background.paper",
    //     margin: "0 auto",
    //   }}
    // >
    //   <Tabs
    //     variant="scrollable"
    //     scrollButtons="auto"
    //     aria-label="scrollable auto tabs example"
    //   >
    //     {arrayTagButton.map((item, index) => (
    //       <TagButton key={index} tag={item} />
    //     ))}
    //   </Tabs>
    // </Box>
    <ModalParticipate/>
  );
};

export default TestPages;
