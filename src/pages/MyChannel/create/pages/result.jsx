import React from 'react';
import ConcursDetailsContainer from '../../../ConcursDetails/ConcursDetailsContainer';
import styles from '../create.module.scss';
import { useOutletContext } from 'react-router-dom';
import { ConvertDataConcurs, validProps } from './prizesDataTable';
import ConcursDetails from '../../../ConcursDetails/ConcursDetails';


const ResultConcurs = () => {
  const context = useOutletContext();
  console.log(validProps(context.getValues()));
  const resultCheckContest = ConvertDataConcurs(context.getValues());

  return (
    <div className={styles.sectionResult}>
      {/* <ConcursDetails preview {...resultCheckContest} /> */}
    </div>
  );
};

export default ResultConcurs;