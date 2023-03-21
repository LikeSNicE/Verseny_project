
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
const App = () =>{
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
        {/* <ResultCompetition/> */}
        {/* <MyConcurs /> */}
      </Container>
    </Box>
  );
}

export default App;
