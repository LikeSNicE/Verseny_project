import React from "react";
import styles from "./update.module.scss";
import {
  Routes,
  Route,
  Link,
  Navigate,
  useMatch,
  useLocation,
} from "react-router-dom";
import TabsCustom from "../../../Components/TabsNavCustom/TabsNavCustom";
import ButtonCustom from "../../../Components/ButtonCustom/ButtonCustom";
import MainUpdateConcurs from "./pages/main";
import DescriptionUpdateConcurs from "./pages/description";
import PrizesConcursUpdate from "./pages/prizes";
import ConditionsUpdateConcurs from "./pages/conditions";

const UpdateConcurs = () => {
  let location = useLocation();

  if (location.pathname === "/mychannel/update") {
    return <Navigate to={"/mychannel/update/main/id"} />;
  }

  return (
    <div className={styles.sectionUpdate}>
      <div className={styles.sectionUpdateLeft}>
        <Routes>
          <Route path="main/id" element={<MainUpdateConcurs />} />
          <Route path="description/id" element={<DescriptionUpdateConcurs />} />
          <Route path="prizes/id" element={<PrizesConcursUpdate />} />
          <Route path="condition/id" element={<ConditionsUpdateConcurs />} />
        </Routes>

       
      </div>
      <div className={styles.sectionUpdateRight}>
        <div className={styles.sectionUpdateRightTitle}>О конкурсе</div>
        <div className={styles.sectionUpdateRightTabBlock}>
          <TabsCustom
            className={styles.sectionUpdateRightTabs}
            to="main/id"
            children="Основная страница"
          />
        </div>

        <div className={styles.sectionUpdateRightTabBlock}>
          <TabsCustom
            className={styles.sectionUpdateRightTabs}
            to="description/id"
            children="Описание"
          />
        </div>

        <div className={styles.sectionUpdateRightTabBlock}>
          <TabsCustom
            className={styles.sectionUpdateRightTabs}
            to="prizes/id"
            children="Призы"
          />
        </div>

        <div className={styles.sectionUpdateRightTabBlock}>
          <TabsCustom
            className={styles.sectionUpdateRightTabs}
            to="condition/id"
            children="Условия"
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateConcurs;
