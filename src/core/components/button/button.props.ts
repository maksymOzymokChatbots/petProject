/**
 * Props
 */
type ButtonProps = Exclude<React.HTMLAttributes<HTMLButtonElement>, 'type'> & {
  /**
   * Button type
   */
  type?: string;
  /**
   * Button theme
   */
  theme?: 'primary' | 'secondary' | 'buy';
  /**
   * Rounded btn
   */
  rounded?: boolean;
  /**
   * Disabled
   */
  disabled?: boolean;
  /**
   * Use style with icon
   */
  icon?: boolean;
  /**
   * Animated
   */
  animated?: boolean;
};

export { ButtonProps };
