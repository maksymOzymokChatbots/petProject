import React, { Fragment, useState } from 'react';
import { HeaderProps } from './header.props';
import * as styles from './header.scss';
import loadable from '@loadable/component';
import { Button, SVGIcon } from '@core/components';
//const SvgIcon = loadable(() => import('@core/components'));
import { Link } from 'react-router-dom';
import { Sidebar } from './sidebar';
//onst Button = loadable(() => import('@core/components'));

const MenuItem = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.link}>
        <a href='/' className={styles.linkItem}>
          About
        </a>
      </div>
      <div className={styles.link}>
        <a href='/' className={styles.linkItem}>
          Mission
        </a>
      </div>
      <div className={styles.link}>
        <a href='/' className={styles.linkItem}>
          Product
        </a>
      </div>
      <div className={styles.link} style={{ width: '180px' }}>
        <a href='/' className={styles.linkItem}>
          <Button>Contact</Button>
        </a>
      </div>
    </div>
  );
};

const DesktopWrapper = ({ children }) => (
  <div className={styles.desktop}>{children}</div>
);

/**
 * Renders Header
 */
const Header: React.FC<HeaderProps> = ({}) => (
  <div className={styles.header} id='page-wrap'>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.logo}>
          <span className={styles.logoPreview}>Your</span>
          <span className={styles.logoName}>Picture</span>
          <div className={styles.logoCaption}>Интернет-магазин</div>
        </div>
        <MenuItem />
        <Sidebar />
      </div>
      <div className={styles.content}>
        <h1 className={styles.contentHeader}>
          <span> Картины-раскраски</span> для арт-терапии
        </h1>
        <img
          className={styles.contentGif}
          src={require('../../../public/img/header-gif.gif')}
        />

        <h2 className={styles.contentCaption}>
          Раскрашивая наши <span> картины по номерам</span> ты сможешь круто
          провести время и успокоится:)
        </h2>
        <a href='#shop'>
          <Button theme='primary' animated className={styles.choose}>
            Выбрать картину
          </Button>
        </a>
      </div>
    </div>
  </div>
);

export { Header };
