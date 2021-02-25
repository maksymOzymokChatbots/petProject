import * as React from 'react';
import { AlertProps } from './alert.props';
import * as styles from './alert.scss';
import { Icon } from '..';
import classNames from 'classnames';

/**
 * Renders Alert
 */
const Alert: React.FC<AlertProps> = ({
  children,
  className,
  message,
  description
}) => (
  <div className={classNames(styles.alert, className)}>
    <div>
      <Icon className={styles.icon} name='check-circle' />
    </div>
    <div className={styles.main}>
      <h2 className={styles.message}>{message}</h2>
      <div className={styles.description}>{description}</div>
      {children}
    </div>
    <div>
      <Icon className={styles.closer} name='x' />
    </div>
  </div>
);

export { Alert };
