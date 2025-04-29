import * as styles from './commonStyle.css';

interface PlayerOnFieldGridCellProps {
  onClick?: () => void;
}

export const EmptyOnFieldGridCell = ({
  onClick,
}: PlayerOnFieldGridCellProps) => {
  return <div className={styles.commonCellContainer} onClick={onClick}></div>;
};
