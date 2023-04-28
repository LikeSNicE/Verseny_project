import React,{useState} from 'react';
import TableUI from '../../../../Common/Table/Table';
import { headData,dataTable } from './prizesDataTable';
import styles from '../create.module.scss';




const Prizes = () => {

  const [counter,setCounter] = useState(0);

  return (
    <div className={styles.sectionPrizes}>
      <div className={styles.sectionPrizesTitle}>
        Количество мест победителей:
      </div>
      <div className={styles.sectionPrizesCounter}>
        <button onClick={() => setCounter(counter - 1)} className={styles.sectionPrizesCounterBtnMinus}>-</button>
        <div className={styles.sectionPrizesCounterInput}>{counter}</div>
        <button onClick={() => setCounter(counter + 1)} className={styles.sectionPrizesCounterBtnPlus}>+</button>
      </div>
      <div className={styles.sectionPrizesTable}>
        <TableUI data={dataTable} head={headData} />
      </div>
    </div>
  );
};

export default Prizes;