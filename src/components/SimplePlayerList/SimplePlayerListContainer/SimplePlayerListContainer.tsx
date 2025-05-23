import { type PropsWithChildren } from 'react';

import * as styles from './SimplePlayerListContainer.css';

interface SimplePlayerListContainerProps extends PropsWithChildren {
  isEmpty: boolean;
}

export const SimplePlayerListContainer = ({
  isEmpty,
  children,
}: SimplePlayerListContainerProps) => {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.header}>
        <span className={styles.title}>교체 선수</span>
      </div>
      <ul className={styles.list}>{isEmpty ? <EmptyList /> : children}</ul>
    </div>
  );
};

const EmptyList = () => {
  return (
    <div className={styles.emptyListContainer}>
      <span className={styles.emptyListDescription}>교체 선수가 없습니다.</span>
    </div>
  );
};
