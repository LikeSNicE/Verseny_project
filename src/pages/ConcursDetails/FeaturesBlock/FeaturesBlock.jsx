import React from "react";
import styles from '../ConcursDetails.module.scss';

const FeaturesBlock = () => {
  return (
    <div className={styles.conditionSection}>
      <h3 className={styles.conditionSectionTitle}>Условия конкурса : </h3>
      <ul className={styles.conditionSectionList}>
        <li className={styles.conditionSectionListItem}>
          Для участия в розыгрыше необходимо: - Подписаться на группу: *ссылка*;
          - Сделать репост этой записи. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Pariatur corporis repudiandae veniam perferendis
          sit! Accusamus autem debitis impedit exercitationem quam? Nesciunt
          minima, qui quibusdam in culpa quod similique facere provident? Nisi
          repellendus ducimus ipsam cupiditate dolorem omnis. Recusandae maiores
          quam iste velit commodi veritatis facilis reprehenderit nisi dolorem
          vel officiis sint et, a illo, molestiae doloremque, aperiam voluptatum
          deserunt voluptas.
        </li>
      </ul>
    </div>
  );
};

export default FeaturesBlock;
