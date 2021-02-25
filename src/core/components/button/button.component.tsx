import * as React from 'react';
import { ButtonProps } from './button.props';
import * as styles from './button.scss';
import { capitalize } from '@core/utils';
import classNames from 'classnames';

/**
 * Renders Button
 */
const Button: React.FC<ButtonProps> = ({
  icon,
  theme,
  rounded,
  disabled,
  children,
  animated,
  className,
  ...props
}) => (
  <button
    className={classNames(
      className,
      styles.button,
      styles['buttonTheme' + capitalize(theme)],
      {
        [styles.buttonIcon]: icon,
        [styles.disabled]: disabled,
        [styles.animated]: animated,
        [styles.buttonRounded]: rounded
      }
    )}
    disabled={disabled}
    {...(props as any)}
  >
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  theme: 'primary'
};

export { Button };
