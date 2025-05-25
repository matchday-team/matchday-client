import { ComponentProps } from 'react';

import { commonCellContainer } from './commonStyle.css';

interface EmptyOnFieldGridCellProps extends ComponentProps<'div'> {
  onClick?: () => void;
  isDragOver?: boolean;
  disabled?: boolean;
}

export const EmptyOnFieldGridCell = ({
  onClick,
  isDragOver,
  disabled,
  ...props
}: EmptyOnFieldGridCellProps) => {
  return (
    <div
      className={commonCellContainer({ isDragOver, disabled })}
      onClick={onClick}
      {...props}
    ></div>
  );
};
