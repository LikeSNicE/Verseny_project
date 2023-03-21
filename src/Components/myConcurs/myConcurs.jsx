import React from 'react';
import styles from './myConcurs.module.scss';
import CardItem from '../Common/Card';
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

const MyConcurs = () => {
  return (
    <div className={styles.concurs}>
      <CardItem
        title="Lizard"
        poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorName="Ubisoft"
        startDate="2 февраля 2022 "
        endDate="20 февраля 2022 "
        nameOfSilence="Гумманитарные науки"
        iconType={<ImageOutlinedIcon />}
      />

      <CardItem
        title="Lizard"
        poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorName="Ubisoft"
        startDate="2 февраля 2022 "
        endDate="20 февраля 2022 "
        nameOfSilence="Гумманитарные науки"
        iconType={<ImageOutlinedIcon />}
      />

      <CardItem
        title="Lizard"
        poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorName="Ubisoft"
        startDate="2 февраля 2022 "
        endDate="20 февраля 2022 "
        nameOfSilence="Гумманитарные науки"
        iconType={<ImageOutlinedIcon />}
      />

      <CardItem
        title="Lizard"
        poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorName="Ubisoft"
        startDate="2 февраля 2022 "
        endDate="20 февраля 2022 "
        nameOfSilence="Гумманитарные науки"
        iconType={<ImageOutlinedIcon />}
      />

      <CardItem
        title="Lizard"
        poster="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorAvatar="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
        authorName="Ubisoft"
        startDate="2 февраля 2022 "
        endDate="20 февраля 2022 "
        nameOfSilence="Гумманитарные науки"
        iconType={<ImageOutlinedIcon />}
      />
    </div>
  );
};

export default MyConcurs;