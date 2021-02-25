import React, { useRef } from 'react';
import { useSidebarProps } from './sidebar.props';
import * as styles from './sidebar.scss';
import { hoc } from '@core/utils';
import classNames from 'classnames';
import { useClickOutside } from '@core/hooks';
import { Footer } from '../../footer';

type BurgerProps = {
  className?: string;
  onClick: () => void;
};

const Burger = ({ onClick, className }: BurgerProps) => (
  <div className={classNames(styles.burger, className)} onClick={onClick}>
    <div className={styles.burgerLabel} />
    <div className={styles.burgerLabel} />
    <div className={styles.burgerLabel} />
  </div>
);

/**
 * Renders Sidebar
 */
const Sidebar = hoc(
  useSidebarProps,
  ({ isActive, onBurgerClick, onOutsideClick }) => {
    const overlayRef = useRef(null);

    useClickOutside(overlayRef, onOutsideClick);

    return (
      <div>
        <Burger onClick={onBurgerClick} />
        <div
          className={classNames(styles.overlay, {
            [styles.overlayActive]: isActive
          })}
        >
          <div
            ref={overlayRef}
            className={classNames(styles.sidebar, {
              [styles.sidebarActive]: isActive
            })}
          >
            <Burger className={styles.sidebarBurger} onClick={onBurgerClick} />
            <div className={styles.container}>
              <div className={styles.nav}>
                <a
                  className={styles.navItem}
                  href='#about'
                  onClick={onOutsideClick}
                >
                  О нашем продукте
                </a>
                <a
                  className={styles.navItem}
                  href='#shop'
                  onClick={onOutsideClick}
                >
                  Выбрать картину
                </a>
                <a className={styles.navItem}>Контакты</a>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export { Sidebar };
