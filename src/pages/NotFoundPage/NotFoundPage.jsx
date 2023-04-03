import React from 'react';
import styles from './NotFoundPage.module.scss';
import errorImg from '../../assets/images/404/404.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <div className={styles.errorLeft}>
        <h1 className={styles.errorLeftTitle}>Ой!,Страница не найдена</h1>
        <p className={styles.errorLeftText}>
          Мы извиняемся, похоже мы не смогли найти страницу по запросу. Может
          быть вы ввели не правильный адрес
        </p>
        <Button variant='contained' sx={{
          mt: '20px',
          '&:hover': {
            background: 'main'
          }
        }} className={styles.errorLeftButton}>
          <Link className={styles.errorLeftLink} to={"/"}>
            Назад к домашней странице
          </Link>
        </Button>
      </div>
      <div className={styles.errorRight}>
        <img src={errorImg} alt="error img" />
      </div>
    </div>
  );
};

export default NotFoundPage;