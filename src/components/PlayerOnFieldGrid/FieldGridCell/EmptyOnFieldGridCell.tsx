import { useIsDragOver } from '@/hooks';

import { commonCellContainer } from './commonStyle.css';

interface EmptyOnFieldGridCellProps {
  onClick?: () => void;
}

export const EmptyOnFieldGridCell = ({
  onClick,
}: EmptyOnFieldGridCellProps) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<HTMLDivElement>();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'none';
  };

  return (
    <div
      className={commonCellContainer({ isDragOver })}
      onClick={onClick}
      ref={hoverTargetRef}
      onDragOver={handleDragOver}
    ></div>
  );
};
