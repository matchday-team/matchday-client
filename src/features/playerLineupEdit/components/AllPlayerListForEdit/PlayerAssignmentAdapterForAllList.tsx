import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { useDeleteMatchUserMutation } from '@/apis/mutations';
import { matchQuery } from '@/apis/queries';
import { usePlayerLineupEditStore } from '@/features/playerLineupEdit';
import { useIsDragOver } from '@/hooks';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerAssignmentAdapterForAllListProps<Element extends HTMLElement> = {
  matchId: number;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForAllList = <Target extends HTMLElement>({
  matchId,
  render,
}: PlayerAssignmentAdapterForAllListProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, finishAssignment } = usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  const isAvailable = selection && selection.type !== 'all';

  const handleDragOver = (e: DragEvent<Target>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAvailable) {
      return;
    }

    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e: DragEvent<Target>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAvailable) {
      return;
    }

    const { player: sourcePlayer } = selection;
    if (typeof sourcePlayer.matchUserId !== 'number') {
      throw new Error('matchUserId가 없는 선수입니다.');
    }

    await deleteMatchUser(sourcePlayer.matchUserId);
    await queryClient.invalidateQueries(matchQuery.players(matchId));
    finishAssignment();
  };

  return render({
    isDragOver,
    disabled: isDragOver && !isAvailable,
    ref: hoverTargetRef,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
  });
};
