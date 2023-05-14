import React from 'react';
import styles from '../AllSubcriptions.module.scss';
import { dataCard } from '../AllSubcriptions';
import CardCustom from '../../../Components/CardCutsom/CardCustom';

const TabItemFirst = () => {
  return (
    
      <div className={styles.sectionSubInfoChannelConcurs}>
        {dataCard.map((item, index) => (
          <CardCustom role={""} key={index} dataCard={item} />
        ))}
      </div>
   
  );
};

export default TabItemFirst;