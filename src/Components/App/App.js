import "./App.scss";
import ConcursDetailsContainer from "../../pages/ConcursDetails/ConcursDetailsContainer";
import Header from "../../pages/Header/Header";
import { Box, Container } from "@mui/material";
import ProfileSettings from "../../pages/ProfileSettings/ProfileSettings";
import ResultCompetition from "../../pages/ResultsCompetition/ResultCompetition";
import MyConcurs from "../../pages/myConcurs/myConcurs";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AllSubcriptions from "../../pages/AllSubcriptions/AllSubcriptions";
import Channel from "../../pages/Channel/Channel";

const App = () => {
  return (
    <Box>
      <Header />
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concurs/id/*" element={<ConcursDetailsContainer />} />
          <Route path="/profileInfoChannel/*" element={<ProfileSettings />} />
          <Route path="/concurs/id/result" element={<ResultCompetition />} />
          <Route path="/myconcurs" element={<MyConcurs />} />
          <Route path="/allSubcription" element={<AllSubcriptions />} />
          <Route path="/channel/id/*" element={<Channel/>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
