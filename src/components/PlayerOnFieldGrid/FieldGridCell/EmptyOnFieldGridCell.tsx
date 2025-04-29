import { commonCellContainer } from './commonStyle.css';

interface PlayerOnFieldGridCellProps {
  onClick?: () => void;
}

export const EmptyOnFieldGridCell = ({
  onClick,
}: PlayerOnFieldGridCellProps) => {
  return <div className={commonCellContainer()} onClick={onClick}></div>;
};
