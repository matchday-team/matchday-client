import {
  CenterCircleHalf,
  InnerPenaltyBox,
  OuterPenaltyBox,
} from '@/assets/images/field';

import * as styles from './FieldBackground.css';

export const FieldBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.rootContainer}>
      <CenterCircleHalf className={styles.centerCircleHalf} />
      <InnerPenaltyBox className={styles.innerPenaltyBox} />
      <OuterPenaltyBox className={styles.outerPenaltyBox} />
      {children}
    </div>
  );
};
