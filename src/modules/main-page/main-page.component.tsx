import * as React from 'react';
import * as styles from './main-page.scss';
import { hoc } from '@core/utils';
import { useMainPageProps } from './main-page.props';
import { Header } from './header';
import { About } from './about';
import { ShopContainer } from './shop-container';
import { Basket } from './shop-container/basket';
import { Footer } from './footer';
/**
 * Main Page
 */
const MainPage = hoc(useMainPageProps, ({ showBasket, height }) => (
  <div className={styles.content}>
    {showBasket && <Basket />}
    <Header />
    <About />
    <ShopContainer />
    <Footer />
  </div>
));

export { MainPage };
