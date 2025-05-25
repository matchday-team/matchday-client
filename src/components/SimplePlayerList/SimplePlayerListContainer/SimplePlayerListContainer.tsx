import { ComponentProps } from 'react';

import * as styles from './SimplePlayerListContainer.css';

interface SimplePlayerListContainerProps extends ComponentProps<'div'> {
  isEmpty: boolean;
  isDragOver?: boolean;
  disabled?: boolean;
  height?: number | string;
}

export const SimplePlayerListContainer = ({
  isEmpty,
  isDragOver,
  disabled,
  height = '100%',
  children,
  ...props
}: SimplePlayerListContainerProps) => {
  return (
    <div
      className={styles.rootContainer({ isDragOver, disabled })}
      style={{ height }}
      {...props}
    >
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
