import * as React from 'react';
import { useCategoryProps } from './category.props';
import * as styles from './category.scss';
import { hoc } from '@core/utils';
import { ProductCard } from '../product-card';

/**
 * Renders Category
 */
const Category = hoc(useCategoryProps, ({ name, products }) => {
  return (
    <div className={styles.category}>
      <h2 className={styles.categoryName}>{name}</h2>
      <div className={styles.products}>
        {products.map(product => (
          <ProductCard data={product} />
        ))}
      </div>
    </div>
  );
});

export { Category };
