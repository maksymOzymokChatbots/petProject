import * as React from 'react';
import { CheckboxProps } from './checkbox.props';
import * as styles from './checkbox.scss';
import * as classNames from 'classnames';

/**
 * Renders Checkbox
 */
const Checkbox: React.FC<CheckboxProps> = ({
  className,
  onChange,
  label,
  value
}) => {
  const onClick = () => {
    onChange(!value);
  };

  return (
    <div
      className={classNames(styles.checkbox, className, {
        [styles.checkboxActive]: value
      })}
    >
      <div className={styles.box} onClick={onClick}>
        {value && <div className={styles.checkmark} />}
      </div>
      <label className={styles.label} onClick={onClick}>
        {label}
      </label>
    </div>
  );
};

export { Checkbox };
