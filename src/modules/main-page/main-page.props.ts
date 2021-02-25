import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '@store';
import { useWindowSize } from '@core/hooks';
/**
 * <MainPage /> props
 */
const useMainPageProps = () => {
  const dispatch = useDispatch();
  const { height } = useWindowSize();

  const {
    general: { basket }
  } = useSelector((state: State) => state);

  const showBasket = useMemo(() => Boolean(Object.keys(basket).length), [
    basket
  ]);

  return {
    height,
    showBasket
  };
};

export { useMainPageProps };
