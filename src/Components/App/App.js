
import './App.css';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../../pages/Header/Header';
import { Box, Container } from "@mui/material";
import ProfileInfoChannel from "../../pages/ProfileInfo/ProfileInfo";
import ProfileDetails from '../../pages/ProfileDetails/ProfileDetails';
import ResultCompetition from '../../pages/ResultsCompetition/ResultCompetition';
import SettingUser from '../../pages/settingUser/settingUser';
import MyConcurs from '../../pages/myConcurs/myConcurs';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { Routes,Route } from 'react-router-dom';
import TagButton from '../TagButton/TagButton';
import { useState } from 'react';
import SettingChannel from '../../pages/settingChannel/settingChannel';
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
          <Route path="/profileInfoChannel/*" element={<ProfileInfoChannel />}/>
          <Route path="/profileDetails" element={<ProfileDetails />} />
          <Route path="/concurs/result" element={<ResultCompetition />} />
          <Route path="/myconcurs" element={<MyConcurs />} />
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
