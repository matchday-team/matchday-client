import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { MatchUserCreateRequestRole } from '@/apis/models';
import {
  useCreateMatchUserMutation,
  useDeleteMatchUserMutation,
  usePatchMatchUserGridMutation,
} from '@/apis/mutations';
import { matchQuery } from '@/apis/queries';
import { usePlayerLineupEditStore } from '@/features/playerLineupEdit';
import { useIsDragOver } from '@/hooks';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
  onDragEnd: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerAssignmentAdapterForEmptyGridProps<Element extends HTMLElement> = {
  matchId: number;
  matchGrid: number;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForEmptyGrid = <
  Target extends HTMLElement,
>({
  matchId,
  matchGrid,
  render,
}: PlayerAssignmentAdapterForEmptyGridProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, finishAssignment } = usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();
  const { mutateAsync: patchMatchUserGrid } = usePatchMatchUserGridMutation();

  const isAvailable = !!selection;

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
          role: MatchUserCreateRequestRole.START_PLAYER,
          matchPosition: sourcePlayer.matchPosition,
          matchGrid,
        });
        break;
      case 'starter-grid':
        await patchMatchUserGrid({
          matchUserId: sourcePlayer.matchUserId,
          matchGrid,
        });
        break;
      case 'bench':
        await deleteMatchUser(sourcePlayer.matchUserId);
        await createMatchUser({
          matchId,
          userId: sourcePlayer.id,
          teamId: sourcePlayer.teamId,
          role: MatchUserCreateRequestRole.START_PLAYER,
          matchPosition: sourcePlayer.matchPosition,
          matchGrid,
        });
        break;

      default:
        throw new Error(`잘못된 target: ${sourceType}입니다`);
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
    onDragEnd: finishAssignment,
  });
};
