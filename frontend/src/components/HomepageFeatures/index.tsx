import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Advanced Robotics',
    description: (
      <>
        Explore cutting-edge robotics technologies, from humanoid robots to autonomous systems.
      </>
    ),
  },
  {
    title: 'AI Integration',
    description: (
      <>
        Learn how artificial intelligence powers modern robotics applications.
      </>
    ),
  },
  {
    title: 'ROS & Simulation',
    description: (
      <>
        Master ROS 2, Gazebo, and Isaac Sim for robotics development and testing.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureSvg}>
          <svg className={styles.robotIcon} viewBox="0 0 24 24" width="200" height="200">
            <path fill="var(--ifm-color-primary)" d="M12,2A2,2 0 0,1 14,4V7H15V9H9V7H10V4A2,2 0 0,1 12,2M21,9V7L15,1H5A2,2 0 0,0 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V7H10V9H5V3H13V6H15V3H19V9Z" />
          </svg>
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
