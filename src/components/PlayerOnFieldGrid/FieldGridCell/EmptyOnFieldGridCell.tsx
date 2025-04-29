import { commonCellContainer } from './commonStyle.css';

interface EmptyOnFieldGridCellProps {
  onClick?: () => void;
}

export const EmptyOnFieldGridCell = ({
  onClick,
}: EmptyOnFieldGridCellProps) => {
  return <div className={commonCellContainer()} onClick={onClick}></div>;
};
