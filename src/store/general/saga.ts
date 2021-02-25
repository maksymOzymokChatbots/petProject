import { Payload, Saga } from 'redux-chill';

import { StoreContext } from '@store/context';
import { StorageKey } from '@store/storage';
import { put, call } from 'redux-saga/effects';
import { Called } from '@core';

class GeneralSaga {
  /**
   * Start app
   */
  @Saga()
  public *start({ storage }: StoreContext) {
    const authorized = Boolean(storage.get(StorageKey.token));
  }
}

export { GeneralSaga };
