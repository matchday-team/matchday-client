import { useIsDragOver } from '@/hooks';

import { commonCellContainer } from './commonStyle.css';

interface EmptyOnFieldGridCellProps {
  onClick?: () => void;
}

export const EmptyOnFieldGridCell = ({
  onClick,
}: EmptyOnFieldGridCellProps) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<HTMLDivElement>();

  return (
    <div
      className={commonCellContainer({ isDragOver, disabled: isDragOver })}
      onClick={onClick}
      ref={hoverTargetRef}
    ></div>
  );
};
