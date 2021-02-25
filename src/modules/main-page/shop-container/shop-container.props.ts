import { State } from '@store';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
/**
 * Props
 */
type ShopContainerProps = {};

const useShopContainerProps = (props: ShopContainerProps) => {
  const {
    general: {
      data: { womans, mans, kids },
      basket
    }
  } = useSelector((state: State) => state);

  const showBasket = useMemo(() => Boolean(basket), [basket]);
  return {
    womans,
    mans,
    kids,
    showBasket
  };
};

export { useShopContainerProps };
