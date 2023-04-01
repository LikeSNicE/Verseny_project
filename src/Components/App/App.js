
import './App.css';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import { Box, Container } from "@mui/material";
import ProfileInfoChannel from "../ProfileInfo/ProfileInfo";
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ResultCompetition from '../ResultsCompetition/ResultCompetition';
import MyConcurs from "../myConcurs/myConcurs";
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Routes,Route } from 'react-router-dom';
import TagButton from '../TagButton/TagButton';
import { useState } from 'react';
// import { dataJson } from '../TagButton/data';

// const data = [
//   {
//     id: 1,
//     name: "Точные науки",
//     color: "red",
//   },
//   {
//     id: 2,
//     name: "Програмирования",
//     color: "blue",
//   },
//   {
//     id: 3,
//     name: "Физика",
//     color: "purple",
//   },
//   {
//     id: 4,
//     name: "Геометрия",
//     color: "orange",
//   },
//   {
//     id: 5,
//     name: "Английский язык",
//     color: "green",
//   },
// ];

const App = () =>{

  const [checked,setChecked] = useState(null);
  
  return (
    <Box>
      <Header />
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profileInfoChannel" element={<ProfileInfoChannel />} />
          <Route path="/profileDetails" element={<ProfileDetails />} />
          <Route path="/concurs/result" element={<ResultCompetition/>} />
          <Route path="/myconcurs" element={<MyConcurs/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {/* <TagButton tag={data}/> */}
        {/* {data.map((item,index)=> (
          <TagButton key={index} tag={item} state={setChecked} />
        ))} */}
        
      </Container>
    </Box>
  );
}

export default App;
