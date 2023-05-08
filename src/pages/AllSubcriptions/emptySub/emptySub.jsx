import React from "react";
import styles from "../AllSubcriptions.module.scss";
import unSub from "../../../assets/images/subscription/unsub.svg";
const EmptySub = () => {
  return (
    <div>
      <img src={unSub} alt="unSub" />
      <div className={styles.sectionSubscriptionInfoChannelTitle}>
        Вы в первый раз зашли?
      </div>
      <div className={styles.sectionSubscriptionInfoChannelSubtitle}>
        В этом окошке вы можете просмотреть и оценивать кандидатовВ этом окошке
        вы можете просмотреть и оценивать кандидатов
      </div>
    </div>
  );
};

export default EmptySub;
