import { Product } from '@api';

/**
 * Props
 */
type CategoryProps = {
  /**
   * Category Name
   */
  name: string;
  /**
   * Products
   */
  products: Product[];
};

const useCategoryProps = ({ products, name }: CategoryProps) => {
  return { products, name };
};

export { useCategoryProps };
