import * as React from 'react';
import { ProductProps } from './product.props';
import * as styles from './product.scss';
import { CountController } from '../../count-controller';
import { Icon } from '@core';

type ProductType = {
  count: number;
  id?: string;
  img?: string;
  price?: string;
  onAdd?: (id?: string) => void;
  onMinus?: (id?: string) => void;
  onDelete?: (id?: string) => void;
};

const Product = ({
  count,
  onAdd,
  onMinus,
  onDelete,
  id,
  img,
  price
}: ProductType) => (
  <div className={styles.product}>
    <img className={styles.img} src={img} />
    <CountController
      value={count}
      onAdd={() => onAdd(id)}
      onDelete={() => onMinus(id)}
    />
    <Icon
      name='trashcan'
      className={styles.delete}
      onClick={() => onDelete(id)}
    />
    <div className={styles.price}>{count * parseInt(price)} UAH</div>
  </div>
);
export { Product };
