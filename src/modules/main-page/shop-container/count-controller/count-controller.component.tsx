import * as React from 'react';
import { useCountControllerProps } from './count-controller.props';
import * as styles from './count-controller.scss';
import { hoc } from '@core/utils';
import { Icon } from '@core/components';

/**
 * Renders CountController
 */
const CountController = hoc(
  useCountControllerProps,
  ({ onAdd, onDelete, value }) => {
    return (
      <div className={styles.countController}>
        <Icon className={styles.icon} name='minus' onClick={onDelete} />
        <div className={styles.value}>{value}</div>
        <Icon className={styles.icon} name='plus' onClick={onAdd} />
      </div>
    );
  }
);

export { CountController };
