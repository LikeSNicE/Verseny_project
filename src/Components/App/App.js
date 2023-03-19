
import './App.css';
import MainPage from '../MainPage/MainPage';
import Header from '../Header/Header';
import { Box, Container } from "@mui/material";
// import ProfileDetals from '../ProfileDetails/ProfileDetails';
import ProfileInfoChannel from "../ProfileInfo/ProfileInfo";
import App1 from './index';
const App = () =>{
  return (
    <Box>
      <Header />
      <Container maxWidth={"lg"}>
        {/* <ProfileDetals /> */}
        {/* <MainPage/> */}
        <ProfileInfoChannel />
      </Container>
    </Box>
  );
}

export default App;
