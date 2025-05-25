import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { MatchUserCreateRequestRole } from '@/apis/models';
import {
  useCreateMatchUserMutation,
  useDeleteMatchUserMutation,
} from '@/apis/mutations';
import { matchQuery } from '@/apis/queries';
import { useIsDragOver } from '@/hooks';

import {
  PlayerLineupEditSourceType,
  usePlayerLineupEditStore,
} from './playerLineupEditStore';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerAssignmentAdapterForListProps<Element extends HTMLElement> = {
  targetType: PlayerLineupEditSourceType;
  matchId: number;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForSubList = <Target extends HTMLElement>({
  targetType,
  matchId,
  render,
}: PlayerAssignmentAdapterForListProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, finishAssignment } = usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  const isAvailable = !selection || targetType !== selection.type;

  // [도착 기준] 교체 리스트 선수: 비허용
  const handleDragOver = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e: DragEvent<Target>) => {
    e.preventDefault();

    if (!isAvailable) {
      return;
    }

    const { selection } = usePlayerLineupEditStore.getState();
    if (!selection) {
      return;
    }
    const { type: sourceType, player: sourcePlayer } = selection;

    // 도착지 기준으로
    switch (sourceType) {
      case 'all':
        // 팀 명단에서 온 경우
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
        // 선발 명단에서 온 경우
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
    disabled: !isAvailable,
    ref: hoverTargetRef,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
  });
};
