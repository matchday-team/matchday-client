import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import {
  MatchUserCreateRequestRole,
  MatchUserResponse,
  TeamResponse,
} from '@/apis/models';
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
  onDragStart: React.DragEventHandler<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
  onDragEnd: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerAssignmentAdapterForStarterGridProps<Element extends HTMLElement> = {
  matchId: number;
  team: TeamResponse;
  player: MatchUserResponse;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForStarterGrid = <
  Target extends HTMLElement,
>({
  matchId,
  team,
  player,
  render,
}: PlayerAssignmentAdapterForStarterGridProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, beginAssignment, finishAssignment } =
    usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  const isAvailable = selection && selection.player.id !== player.userId;

  const handleDragStart = () => {
    if (!player.matchPosition || typeof player.matchGrid !== 'number') {
      throw new Error('matchPosition 혹은 matchGrid가 없는 선수입니다.');
    }

    beginAssignment({
      type: 'starter-grid',
      player: {
        id: player.userId,
        teamId: team.id,
        matchPosition: player.matchPosition,
        matchGrid: player.matchGrid,
        matchUserId: player.id,
      },
    });
  };

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
        await deleteMatchUser(player.id);
        await createMatchUser({
          matchId,
          userId: sourcePlayer.id,
          teamId: sourcePlayer.teamId,
          role: MatchUserCreateRequestRole.START_PLAYER,
          matchPosition: sourcePlayer.matchPosition,
          matchGrid: player.matchGrid,
        });
        break;
      case 'starter-grid':
      case 'starter-list':
        if (typeof player.matchGrid !== 'number') {
          throw new Error('선발 그리드 선수의 matchGrid가 number가 아님');
        }
        // NOTE: patchMatchUserGrid는 이미 배치된 칸에 배치할 수 없게 해놓아서 delete-create로 작업해야 함
        await Promise.all([
          deleteMatchUser(player.id),
          deleteMatchUser(sourcePlayer.matchUserId),
        ]);
        await Promise.all([
          createMatchUser({
            matchId,
            userId: sourcePlayer.id,
            teamId: sourcePlayer.teamId,
            role: MatchUserCreateRequestRole.START_PLAYER,
            matchPosition: sourcePlayer.matchPosition,
            matchGrid: player.matchGrid,
          }),
          createMatchUser({
            matchId,
            userId: player.userId,
            teamId: team.id,
            role: MatchUserCreateRequestRole.START_PLAYER,
            matchPosition: player.matchPosition,
            matchGrid: sourcePlayer.matchGrid,
          }),
        ]);
        break;
      case 'bench':
        await Promise.all([
          deleteMatchUser(player.id),
          deleteMatchUser(sourcePlayer.matchUserId),
        ]);
        await Promise.all([
          createMatchUser({
            matchId,
            userId: sourcePlayer.id,
            teamId: sourcePlayer.teamId,
            role: MatchUserCreateRequestRole.START_PLAYER,
            matchPosition: sourcePlayer.matchPosition,
            matchGrid: player.matchGrid,
          }),
          createMatchUser({
            matchId,
            userId: player.userId,
            teamId: team.id,
            role: MatchUserCreateRequestRole.SUB_PLAYER,
            matchPosition: player.matchPosition,
            matchGrid: null,
          }),
        ]);
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
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onDragEnd: finishAssignment,
  });
};
