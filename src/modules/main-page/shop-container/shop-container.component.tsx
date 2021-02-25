import * as React from 'react';
import { Category } from './category';
import { useShopContainerProps } from './shop-container.props';
import * as styles from './shop-container.scss';
import { hoc } from '@core/utils';
import { Basket } from './basket';

/**
 * Renders ShopContainer
 */
const ShopContainer = hoc(
  useShopContainerProps,
  ({ womans, mans, kids, showBasket }) => {
    return (
      <div className={styles.shopContainer} id='shop'>
        <Category name={womans.caption} products={womans.products} />
        <Category name={mans.caption} products={mans.products} />
        <Category name={kids.caption} products={kids.products} />
      </div>
    );
  }
);

export { ShopContainer };
