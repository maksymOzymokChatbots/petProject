import { useState } from 'react';

/**
 * Props
 */
type SidebarProps = {
  isActive: boolean;
};

const useSidebarProps = (props: SidebarProps) => {
  const [isActive, setIsActive] = useState(false);

  const onBurgerClick = () => {
    setIsActive(!isActive);
  };

  const onOutsideClick = () => {
    setIsActive(false);
  };

  return {
    onOutsideClick,
    isActive,
    onBurgerClick
  };
};

export { useSidebarProps };
