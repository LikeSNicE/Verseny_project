import React, { useState } from "react";
import styles from "../update.module.scss";
import TableUI from "../../../../Common/Table/Table";
import { dataTable, headData } from "./prizesUpdateData";

const PrizesConcursUpdate = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.sectionUpdatePrizes}>
      <div className={styles.sectionUpdateTitle}>Призы</div>
      <div className={styles.sectionUpdatePrizesSubtitle}>
        Количество мест победителей:
      </div>
      <div className={styles.sectionUpdatePrizesCounter}>
        <button
          onClick={() => setCounter(counter - 1)}
          className={styles.sectionUpdatePrizesCounterBtnMinus}
        >
          -
        </button>
        <div className={styles.sectionUpdatePrizesCounterInput}>{counter}</div>
        <button
          onClick={() => setCounter(counter + 1)}
          className={styles.sectionUpdatePrizesCounterBtnPlus}
        >
          +
        </button>
      </div>
      <div className={styles.sectionUpdatePrizesTable}>
        <TableUI head={headData} data={dataTable}/> 
      </div>
    </div>
  );
};

export default PrizesConcursUpdate;
