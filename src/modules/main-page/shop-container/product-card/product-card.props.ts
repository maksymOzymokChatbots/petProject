import { useState } from 'react';
import { Product } from '@api';
import { useDispatch } from 'react-redux';
import { addItemToBasket } from '@store/general';

/**
 * Props
 */
type ProductCardProps = {
  /**
   * Data
   */
  data: Product;
};

const useProductCardProps = ({ data }: ProductCardProps) => {
  const [count, setCount] = useState<number>(1);
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onAddItemToBasket = () => {
    setSelected(true);
    dispatch(
      addItemToBasket({
        count,
        product: data
      })
    );
  };

  const onAddItemClick = () => {
    setSelected(false);
    if (count < 3) setCount(count + 1);
  };

  const onDeleteItemClick = () => {
    setSelected(false);
    if (count > 1) setCount(count - 1);
  };
  return {
    ...data,
    count,
    selected,
    onAddItemToBasket,
    onAddItemClick,
    onDeleteItemClick
  };
};

export { useProductCardProps };
