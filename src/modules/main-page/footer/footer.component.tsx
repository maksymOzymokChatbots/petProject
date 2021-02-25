import * as React from 'react';
import { FooterProps } from './footer.props';
import * as styles from './footer.scss';
import { Icon } from '@core/components';

/**
 * Renders Footer
 */
const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.icons}>
        <a href='viber://pa?chatURI=380677109574'>
          <Icon name='viber' className={styles.icon} />
        </a>
        <a href='https://t.me/maksymOzymok'>
          <Icon name='instagram' className={styles.icon} />
        </a>
        <a href='https://t.me/maksymOzymok'>
          <Icon name='telegram' className={styles.icon} />
        </a>
      </div>

      <div className={styles.logo}>
        <span className={styles.logoPreview}>Your</span>
        <span className={styles.logoName}>Picture</span>
        <div className={styles.logoCaption}>Интернет-магазин</div>
      </div>
      <div className={styles.rights}>All rights reserved &reg;</div>
    </div>
  );
};

export { Footer };
