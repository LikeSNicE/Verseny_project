import "./App.scss";
import ConcursDetailsContainer from "../../pages/ConcursDetails/ConcursDetailsContainer";
import Header from "../../pages/Header/Header";
import { Box, Container } from "@mui/material";
import ProfileSettings from "../../pages/ProfileSettings/ProfileSettings";
import MyConcurs from "../../pages/myConcurs/myConcurs";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AllSubcriptions from "../../pages/AllSubcriptions/AllSubcriptions";
import Channel from "../../pages/Channel/Channel";
import TestPages from "../../pages/testPages/testPages";
import ConcursShareWinners from "../../pages/ConcursShareWinners/ConcursShareWinners";
import ConcursShare from "../../pages/ConcursShare/ConcursShare";
import ConcursShareUser from "../../pages/ConcursShareUser/ConcursShareUser";
import MyChannel from "../../pages/MyChannel/MyChannel";
import Login from "../../pages/Login/Login";
import User from "../../pages/SignIn/SignInComponents/User";
import ChannelForm from "../../pages/SignIn/SignInComponents/Channel";
import Signin from "../../pages/SignIn/Signin";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import CreateComponent from "../../pages/MyChannel/create/Create";
import MainConcurs from "../../pages/MyChannel/create/pages/main";
import DescriptionConcurs from "../../pages/MyChannel/create/pages/description";
import Prizes from "../../pages/MyChannel/create/pages/prizes";
import ConditionsConcurs from "../../pages/MyChannel/create/pages/conditions";
import ResultConcurs from "../../pages/MyChannel/create/pages/result";
import UpdateConcurs from "../../pages/MyChannel/update/Update";

const App = () => {
  return (
    <Box>
      <Header login={true} />
      <Container maxWidth={"lg"}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/concurs/id/*" element={<ConcursDetailsContainer />} />
          <Route path="/profileInfoChannel/*" element={<ProfileSettings />} />
          <Route
            path="/mychannel/concurs-share/id/*"
            element={<ConcursShare />}
          />
          <Route
            path="/mychannel/concurs-share/concurs-winner/id"
            element={<ConcursShareWinners />}
          />
          <Route
            path="/mychannel/concurs-share/id/user/id"
            element={<ConcursShareUser />}
          />
          <Route path="/myconcurs" element={<MyConcurs />} />
          <Route path="/allSubcription" element={<AllSubcriptions />} />
          <Route path="/channel/id/*" element={<Channel />} />
          <Route path="/mychannel/*" element={<MyChannel />} />
          <Route path="/mychannel/create/*" element={<CreateComponent />}>
            <Route path="main" element={<MainConcurs />} />
            <Route path="description" element={<DescriptionConcurs />} />
            <Route path="prizes" element={<Prizes />} />
            <Route path="conditions" element={<ConditionsConcurs />} />
            <Route path="result" element={<ResultConcurs />} />
          </Route>
          <Route path="/mychannel/update/*" element={<UpdateConcurs/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signin/*" element={<Signin />}>
            <Route path="user" element={<User />} />
            <Route path="channel" element={<ChannelForm />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/test/*" element={<TestPages />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;
