
import './App.css';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import { Box, Container } from "@mui/material";
import ProfileInfoChannel from "../ProfileInfo/ProfileInfo";
import ProfileDetails from '../ProfileDetails/ProfileDetails';
import ResultCompetition from '../ResultsCompetition/ResultCompetition';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { Routes,Route } from 'react-router-dom';
const App = () =>{
  return (
    <Box>
      <Header />
      <Container maxWidth={"lg"}>
        {/* <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/profileInfoChannel' element={<ProfileInfoChannel/>}/>
          <Route path='/profileDetails' element={<ProfileDetails/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
        </Routes> */}
        <ResultCompetition/>
      </Container>
    </Box>
  );
}

export default App;
