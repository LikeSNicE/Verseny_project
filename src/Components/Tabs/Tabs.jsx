import React from "react";
import { useLocation,Navigate } from "react-router-dom";

// Получение индекса роутера 
function getRouteIndex(pathname) {
  switch (pathname) {
    case "/":
      return 0;
    case "/myconcurs":
      return 1;
    case "/profileDetails":
      return 2;
    case "/profileInfoChannel":
      return 3;
    default:
      return 0;
  }
}

const TabsCustom = () => {
   const location = useLocation();
   const index = getRouteIndex(location.pathname);

   const handleChangeTabs = (newValue) => {
     // setTab(newValue);
     switch (newValue) {
       case 0:
         return Navigate("/");
       case 1:
         return Navigate("/myconcurs");
       case 2:
         return Navigate("/profileDetails");
       case 3:
         return Navigate("/profileInfoChannel");
       default:
         return null;
     }
   };
}