import { Caution } from '@/apis/caution';

import * as styles from './CardBlock.css';

export const CardBlock = ({
  caution,
  onClick,
}: {
  caution: Caution;
  onClick: () => void;
}) => {
  return (
    <div className={styles.rootContainer({ caution })} onClick={onClick} />
  );
};
