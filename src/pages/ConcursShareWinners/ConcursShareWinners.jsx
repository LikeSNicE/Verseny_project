import React from 'react';
import ConcursShareTop from '../ConcursShare/ConcursShareTop/ConcursShareTop';
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import styles from './ConcursShareWinners.module.scss';
import TableUI from '../../Common/Table/Table';
import { headData,dataTable } from './ConcursShareWinnersData';

const ConcursShareWinners = () => {
  return (
    <div className={styles.sectionConcursShareWinners}>
      <ConcursShareTop />
      <div className={styles.sectionConcursShareWinnersTitle}>
        Выбор Победителя :{" "}
        {<EmojiEventsOutlinedIcon/>} 
      </div>

      <TableUI head={headData} data={dataTable}/>
    </div>
  );
};

export default ConcursShareWinners;