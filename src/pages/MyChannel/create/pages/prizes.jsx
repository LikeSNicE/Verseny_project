import React,{useState} from 'react';
import TableUI from '../../../../Common/Table/Table';
import { headData } from './prizesDataTable';
import styles from '../create.module.scss';
import CounterCustom from '../../../../Components/CounterCustom/CounterCustom';
import { useOutletContext } from "react-router-dom";




const Prizes = () => {

  const [counter,setCounter] = useState(0);
  const contextOutlet = useOutletContext();

  const [data, setData] = useState([
    [
      {
        PlaceIcon: "1",
      },
      {
        TextField: {
          label: "Введите приз", 
          register: contextOutlet.register('prizes_1')

        },
      },
    ],
  ]);


  const generateArray = (value) => {
    let generateArray = Array(value).fill().map((item,i) => [
      {
        PlaceIcon: `${i+1}`
      },
      {
        TextField:{
          label: 'Введите приз',
          register: contextOutlet.register(`prizes_${i+1}`)
        }
      }
    ]);
    setData(generateArray)
  }

  return (
    <div className={styles.sectionPrizes}>
      <div className={styles.sectionPrizesTitle}>
        Количество мест победителей:
      </div>
      <div>
        <CounterCustom getValue={(value) => generateArray(value)} />
      </div>

      <div className={styles.sectionPrizesTable}>
        <TableUI data={data} head={headData} />
      </div>
    </div>
  );
};

export default Prizes;