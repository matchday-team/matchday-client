import { Caution } from '@/apis/caution';

import * as styles from './CardBlock.css';

export const CardBlock = ({
  caution,
  active,
  onClick,
}: {
  caution: Caution;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={styles.rootContainer({ caution, active })}
      onClick={onClick}
    />
  );
};
