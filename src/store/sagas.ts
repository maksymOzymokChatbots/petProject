import { RouterSaga } from './router';

import { GeneralSaga } from './general';

/**
 * App sagas
 */
const sagas = [new RouterSaga(), new GeneralSaga()];

export { sagas };
