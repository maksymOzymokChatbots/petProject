import { History } from 'history';
import { Store } from 'redux';
import { HttpService } from '@api';
import { Storage, StorageKey } from './storage';
import { AxiosRequestConfig } from 'axios';
import { enviroment } from '@env';
import { ClientService } from '../api/services/client.service';

/**
 * Get context
 */
const getContext = (history: History, store: Store) => {
  const storage = new Storage();

  const getConfig = (): Partial<AxiosRequestConfig> => {
    const token = storage.get(StorageKey.token);

    return {
      baseURL: enviroment.api.url,
      headers: {
        authorization: token ? `Bearer ${token}` : undefined
      }
    };
  };

  const onUnauthorized = () => true;

  const http = new HttpService(getConfig, {
    401: onUnauthorized
  });

  const api = {
    client: new ClientService(http)
  };

  return {
    api,
    store,
    storage,
    history
  };
};

/**
 * Saga context
 */
type StoreContext = ReturnType<typeof getContext>;

export { StoreContext, getContext };
