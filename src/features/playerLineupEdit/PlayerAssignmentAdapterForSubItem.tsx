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

type PlayerAssignmentAdapterForSubItemProps<Element extends HTMLElement> = {
  matchId: number;
  team: TeamResponse;
  player: MatchUserResponse;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForSubItem = <Target extends HTMLElement>({
  matchId,
  team,
  player,
  render,
}: PlayerAssignmentAdapterForSubItemProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, beginAssignment, finishAssignment } =
    usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  const isAvailable = selection && selection.type !== 'bench';

  const handleDragStart = () => {
    if (!player.matchPosition) {
      throw new Error('matchPosition이 없는 선수입니다.');
    }

    beginAssignment({
      type: 'bench',
      player: {
        id: player.userId,
        teamId: team.id,
        matchPosition: player.matchPosition,
        matchGrid: null,
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

  /*
  [도착 기준]
  - 교체 리스트 선수
    - 팀 리스트 선수: 교체 선수를 제거, 팀 선수를 교체에 추가
    - 선발 그리드 선수: 선발 선수를 제거, 교체 선수를 제거, 선발 선수를 교체에 추가, 교체 선수를 선발에 추가(matchGrid 유지)
    - 선발 리스트 선수: 선발 선수를 제거, 교체 선수를 제거, 선발 선수를 교체에 추가, 교체 선수를 선발에 추가(matchGrid 유지)
    - 교체 리스트 선수: 비허용
  */
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
          role: MatchUserCreateRequestRole.SUB_PLAYER,
          matchPosition: sourcePlayer.matchPosition,
          matchGrid: null,
        });
        break;
      case 'starter-grid':
      case 'starter-list':
        await Promise.all([
          deleteMatchUser(player.id),
          deleteMatchUser(sourcePlayer.matchUserId),
        ]);
        await Promise.all([
          createMatchUser({
            matchId,
            userId: sourcePlayer.id,
            teamId: sourcePlayer.teamId,
            role: MatchUserCreateRequestRole.SUB_PLAYER,
            matchPosition: sourcePlayer.matchPosition,
            matchGrid: null,
          }),
          createMatchUser({
            matchId,
            userId: player.userId,
            teamId: team.id,
            role: MatchUserCreateRequestRole.START_PLAYER,
            matchPosition: sourcePlayer.matchPosition,
            matchGrid: sourcePlayer.matchGrid,
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
