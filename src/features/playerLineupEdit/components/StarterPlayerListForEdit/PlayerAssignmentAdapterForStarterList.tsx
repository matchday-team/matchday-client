import { ReactElement } from 'react';

import { useIsDragOver } from '@/hooks';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
}) => ReactElement;

type PlayerAssignmentAdapterForStarterListProps<Element extends HTMLElement> = {
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForStarterList = <
  Target extends HTMLElement,
>({
  render,
}: PlayerAssignmentAdapterForStarterListProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();

  return render({
    isDragOver,
    disabled: isDragOver,
    ref: hoverTargetRef,
  });
};
