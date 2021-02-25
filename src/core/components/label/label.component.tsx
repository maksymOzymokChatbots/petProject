import * as React from 'react';
import * as styles from './label.scss';
import classNames from 'classnames';

/**
 * <Label />
 */
const Label: React.FC<React.HTMLAttributes<HTMLLabelElement>> = ({
  className,
  ...props
}) => <label className={classNames(styles.label, className)} {...props} />;

export { Label };
