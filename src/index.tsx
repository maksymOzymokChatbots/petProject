import * as React from 'react';
import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { createStore } from '@store';
import { Provider } from './provider';
import { App } from '@app';
import { init } from './localization';
import './styles/global.scss';

const history = createBrowserHistory();
const store = createStore(history);
const setup = async () => {
  await init();

  render(
    <Provider store={store} history={history}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

setup();
