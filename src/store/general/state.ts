import { data } from './general.data';

class GeneralState {
  /**
   * Data
   */
  public data?: any = data;
  /**
   * Basket
   */
  public basket: any = {};
  /**
   * Product count
   */
  public productCount: number = null;
}

export { GeneralState };
