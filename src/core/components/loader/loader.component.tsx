import React from 'react';
import styles from './loader.scss';

/**
 * <Loader />
 */
const Loader: React.FC = () => (
  <div
    className={styles.overlay}
    onMouseDown={event => {
      event.stopPropagation();
      event.preventDefault();
    }}
  >
    <div className={styles.overlayInner}>
      <div className={styles.overlayContent}>
        <span className={styles.spinner} />
      </div>
    </div>
  </div>
);
export { Loader };
