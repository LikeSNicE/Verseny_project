import React from "react";
import styles from "./AllSubcriptions.module.scss";
import { Avatar } from "@mui/material";
import { CustomLink } from "../../Components/CutsomLink/CustomLink";
import { Link } from "react-router-dom";

const AllSubcriptions = () => {
  return (
    <div className={styles.sectionSubscriptions}>
      <div className={styles.sectionSubscriptionsTitle}>Ваши подписки</div>
      <div className={styles.sectionSubscriptionsInner}>
        <div className={styles.sectionSubscriptionsItem}>
          <div className={styles.sectionSubscriptionsItemInfo}>
            <Link to={"/channel/id/all-concurs"}>
              <Avatar
                src="https://avatars.githubusercontent.com/u/85344443?s=64&v=4"
                alt="photo of user"
              />
            </Link>
            <p className={styles.sectionSubscriptionsItemInfoCompany}>
              Ubisoft
            </p>
          </div>
          <div className={styles.sectionSubscriptionsItemCountSubcription}>
            <div>подписчиков :</div>
            <span>100</span>
          </div>
        </div>

        {/*Second Item*/}

        <div className={styles.sectionSubscriptionsItem}>
          <div className={styles.sectionSubscriptionsItemInfo}>
            <Link to={"/channel/id/all-concurs"}>
              <Avatar
                src="https://avatars.githubusercontent.com/u/85344443?s=64&v=4"
                alt="photo of user"
              />
            </Link>
            <p className={styles.sectionSubscriptionsItemInfoCompany}>
              Ubisoft
            </p>
          </div>
          <div className={styles.sectionSubscriptionsItemCountSubcription}>
            <div>подписчиков :</div>
            <span>100</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSubcriptions;
