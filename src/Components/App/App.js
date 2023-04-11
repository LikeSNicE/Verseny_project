
import './App.css';
import MainPage from '../../pages/MainPage/MainPage';
import Header from '../../pages/Header/Header';
import { Box, Container } from "@mui/material";
import ProfileSettings from '../../pages/ProfileSettings/ProfileSettings';
import ResultCompetition from '../../pages/ResultsCompetition/ResultCompetition';
import MyConcurs from '../../pages/myConcurs/myConcurs';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import { Routes,Route } from 'react-router-dom';
import Card from '../Card/Card';


const App = () =>{
  
  return (
    <Box>
      <Header />
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/profileInfoChannel/*" element={<ProfileSettings />} />
          <Route path="/concurs/result" element={<ResultCompetition />} />
          <Route path="/myconcurs" element={<MyConcurs />} />
          <Route path='/card' element={<Card/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Box>
  );
}

export default App;
