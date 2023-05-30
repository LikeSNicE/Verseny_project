import React from "react";
import styles from './DeleteContest.module.scss';
import ButtonCustom from "../../ButtonCustom/ButtonCustom";

const DeleteContestModal = () => {
  return (
    <div className={styles.sectionDeleteContest}>
      <h1 className={styles.sectionDeleteContestTitle}>
        Вы действительно хотите удалить конкурс ?
      </h1>
      <div className={styles.sectionDeleteContestSubtitle}>
        При удалаление вы потеряете все данные связаны с конкурсом :
        <ul className={styles.sectionDeleteContestList}>
          <li className={styles.sectionDeleteContestItem}>Участники</li>
          <li className={styles.sectionDeleteContestItem}>
            Файлы с участниками
          </li>
          <li className={styles.sectionDeleteContestItem}>
            Информацию об конкурсе
          </li>
        </ul>
      </div>
      <div className={styles.sectionDeleteContestFlexBtn}>
        <ButtonCustom>Удалить</ButtonCustom>
        <ButtonCustom>Отменить</ButtonCustom>
      </div>
    </div>
  );
};

export default DeleteContestModal;