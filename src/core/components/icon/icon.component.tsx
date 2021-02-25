import * as React from 'react';
import { IconProps } from './icon.props';
import classNames from 'classnames';

/**
 * Renders Icon
 */
const Icon: React.FC<IconProps> = ({
  name,
  children,
  className,
  style = {},
  ...props
}) => (
  <span
    className={classNames(className, `icon-${name}`)}
    style={{
      display: 'inline-block',
      ...style
    }}
    {...props}
  >
    {children}
  </span>
);

export { Icon };
