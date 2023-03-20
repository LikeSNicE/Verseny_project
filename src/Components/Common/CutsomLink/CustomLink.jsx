import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styles from './CustomLink.module.scss';

const CustomLink = ({to,className,chidren}) => {

  const match = useMatch({
    path: to,
    end: to.length === 1
  })

  return (
    <Link
    to={to}
    className={className}
    style={{
      color: match ? 'red' : '#000'
    }}
    >
      {chidren}
    </Link>
  );
};

export default CustomLink;