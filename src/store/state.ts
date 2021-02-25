import { GeneralState } from './general';
import { router } from './router';

/**
 * App state
 */
type State = {
  general: GeneralState;
  router: ReturnType<typeof router>;
};

export { State };
