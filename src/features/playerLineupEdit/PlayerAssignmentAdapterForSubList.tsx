import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { MatchUserCreateRequestRole } from '@/apis/models';
import {
  useCreateMatchUserMutation,
  useDeleteMatchUserMutation,
} from '@/apis/mutations';
import { matchQuery } from '@/apis/queries';
import { useIsDragOver } from '@/hooks';

import { usePlayerLineupEditStore } from './playerLineupEditStore';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerAssignmentAdapterForListProps<Element extends HTMLElement> = {
  matchId: number;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForSubList = <Target extends HTMLElement>({
  matchId,
  render,
}: PlayerAssignmentAdapterForListProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, finishAssignment } = usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  const isAvailable = selection && selection.type !== 'bench';

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

    const { type: sourceType, player: sourcePlayer } = selection;

    switch (sourceType) {
      case 'all':
        await createMatchUser({
          matchId,
          userId: sourcePlayer.id,
          teamId: sourcePlayer.teamId,
          role: MatchUserCreateRequestRole.SUB_PLAYER,
          matchPosition: sourcePlayer.matchPosition,
          matchGrid: null,
        });
        break;
      case 'starter-grid':
      case 'starter-list':
        await deleteMatchUser(sourcePlayer.matchUserId);
        await createMatchUser({
          matchId,
          userId: sourcePlayer.id,
          teamId: sourcePlayer.teamId,
          role: MatchUserCreateRequestRole.SUB_PLAYER,
          matchPosition: sourcePlayer.matchPosition,
          matchGrid: null,
        });
        break;
    }

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
