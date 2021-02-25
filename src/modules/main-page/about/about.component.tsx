import * as React from 'react';
import { useAboutSectionProps } from './about.props';
import * as styles from './about.scss';
import { hoc } from '@core/utils';
import { Icon } from '@core/components';
/**
 * Renders AboutSection
 */
const About = hoc(useAboutSectionProps, ({ aboutData }) => {
  return (
    <div className={styles.aboutSection} id='about'>
      <h1 className={styles.header}>Немного о нашем продукте</h1>

      <div className={styles.aboutContainer}>
        {aboutData.map(({ icon, text }) => (
          <div className={styles.card}>
            <div className={styles.cardContent}>
              <Icon className={styles.cardIcon} name={icon} />

              <div className={styles.cardText}>{text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export { About };
