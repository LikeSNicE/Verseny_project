import React from 'react';
import styles from './ConcursShare.module.scss';
import TagScience from '../../../Components/TagScience/tagScience';

const ConcursShareTop = () => {
  // science data spans
  const namesOfScience = [
    {
      name: "Математика",
      backgroundColor: "orange",
    },
    {
      name: "Английский язык",
      backgroundColor: "red",
    },
    {
      name: "Физика",
      backgroundColor: "green",
    },
    {
      name: "Геометрия",
      backgroundColor: "purple",
    },
    {
      name: "Астнавтика dsadasdasddasdasdasd",
      backgroundColor: "blueviolet",
    },
  ];

  return (
    <div className={styles.result}>
      <div className={styles.resultTop}>
        <div className={styles.resultTopLeft}>
          <img
            src="https://bgr.com/wp-content/uploads/2022/02/Stranger-Things-4-1.jpg?quality=82&strip=all"
            alt="Poster of Competition"
          />
        </div>
        <div className={styles.resultTopRight}>
          <div className={styles.resultTopRightTitle}>
            Конкурс по лучшему косплею по мотивам сериала "Очень странные дела"
          </div>
          <div className={styles.resultTopRightGrid}>
            {namesOfScience.map((name) => (
              <TagScience
                key={name.name}
                className={styles.resultTopRightScience}
                children={name.name}
                backgroundColor={name.backgroundColor}
              />
            ))}
          </div>

          <div className={styles.resultTopRightTitleDate}>
            Дата начало - конец :{" "}
          </div>
          <div className={styles.resultTopRightDate} variant="span">
            2 февраля 2022 - 20 февраля 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcursShareTop;