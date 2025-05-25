import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import {
  MatchUserCreateRequestRole,
  TeamMemberResponse,
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

type PlayerAssignmentAdapterForTeamMemberProps<Element extends HTMLElement> = {
  matchId: number;
  team: TeamResponse;
  player: TeamMemberResponse;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForTeamMember = <
  Target extends HTMLElement,
>({
  matchId,
  team,
  player,
  render,
}: PlayerAssignmentAdapterForTeamMemberProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, beginAssignment, finishAssignment } =
    usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  // NOTE: 드롭이 불가능한 경우는 팀에서 온 경우 외에는 없음
  const isAvailable = !selection || selection.type !== 'all';

  // NOTE: 드래그가 금지되어야 하는 경우는 없음
  const handleDragStart = () => {
    console.log(player, player.defaultPosition);

    if (!player.defaultPosition) {
      throw new Error('defaultPosition이 없는 선수입니다.');
    }

    beginAssignment({
      type: 'all',
      player: {
        id: player.id,
        teamId: team.id,
        matchPosition: player.defaultPosition,
        matchGrid: null,
        matchUserId: null,
      },
    });
  };

  const handleDragOver = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  /*
  [도착 기준]
  - 팀 리스트 선수
    - 팀 리스트 선수: 비허용
    - 선발 그리드 선수: 선발에서 선수 제거, 팀 리스트 선수를 선발에 추가(matchGrid 유지)
    - 선발 리스트 선수: 선발에서 선수 제거, 팀 리스트 선수를 선발에 추가(matchGrid 유지)
    - 교체 리스트 선수: 교체에서 선수 제거, 팀 리스트 선수를 교체에 추가
  */
  const handleDrop = async () => {
    if (!selection || !isAvailable) {
      return;
    }
    const { type, player } = selection;

    switch (type) {
      case 'starter-list':
      case 'starter-grid': // 선발 명단
        await deleteMatchUser(player.matchUserId);
        await createMatchUser({
          matchId,
          userId: player.id,
          teamId: player.teamId,
          role: MatchUserCreateRequestRole.START_PLAYER,
          matchPosition: player.matchPosition,
          matchGrid: player.matchGrid,
        });
        break;

      case 'bench': // 교체 명단
        await deleteMatchUser(player.matchUserId);
        await createMatchUser({
          matchId,
          userId: player.id,
          teamId: player.teamId,
          role: MatchUserCreateRequestRole.SUB_PLAYER,
          matchPosition: player.matchPosition,
          matchGrid: null,
        });
        break;

      default:
        console.warn('Unknown target mode:', type);
    }
    await queryClient.invalidateQueries(matchQuery.players(matchId));
    finishAssignment();
  };

  return render({
    isDragOver,
    disabled: !isAvailable,
    ref: hoverTargetRef,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onDragEnd: finishAssignment,
  });
};
