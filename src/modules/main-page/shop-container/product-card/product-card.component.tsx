import * as React from 'react';
import { useProductCardProps } from './product-card.props';
import * as styles from './product-card.scss';
import { CountController } from '../count-controller';
import { Button } from '@core';
import { hoc } from '@core/utils';
import { Icon } from '@core/components';
import classNames from 'classnames';
/**
 * Renders ProductCard
 */
const ProductCard = hoc(
  useProductCardProps,
  ({
    imgLink,
    id,
    count,
    price,
    onAddItemClick,
    selected,
    onDeleteItemClick,
    onAddItemToBasket
  }) => {
    return (
      <div className={styles.productCard}>
        <img className={styles.img} src={imgLink} />
        <div className={styles.price}>{price} UAH</div>
        <div className={styles.control}>
          <CountController
            value={count}
            onAdd={onAddItemClick}
            onDelete={onDeleteItemClick}
          />
          <Button theme='buy' onClick={onAddItemToBasket}>
            Купить
          </Button>
        </div>
      </div>
    );
  }
);

export { ProductCard };
