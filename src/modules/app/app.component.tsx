import React, { Fragment } from 'react';
import { useAppProps } from './app.props';
import { hoc } from '@core';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '../main-page';
import { Order } from '../order';
/**
 * Renders App
 */
const App = hoc(useAppProps, () => {
  return (
    <Fragment>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/order' component={Order} />
        <Redirect to='/' />
      </Switch>
    </Fragment>
  );
});

export { App };
