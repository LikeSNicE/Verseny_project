import React from 'react';
import ConcursDetailsContainer from '../../../ConcursDetails/ConcursDetailsContainer';
import styles from '../create.module.scss';

const ResultConcurs = () => {
  return (
    <div className={styles.sectionResult}>
      <ConcursDetailsContainer/>
    </div>
  );
};

export default ResultConcurs;