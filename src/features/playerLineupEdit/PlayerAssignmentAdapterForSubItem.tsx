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

  /*
  - 드롭이 불가능한 경우
    - 선발 리스트 -> 선발 리스트에 드롭
    - 팀 리스트 -> 선발 리스트에 드롭
    - 팀 리스트 -> 선발 그리드에 드롭
      - 골키퍼가 골키퍼 자리에 있지 않은 경우 (이거는 메시지 띄워줄만 한데? 뭐가 문젠지 알기 어려울 듯? / 뭔가 모달이 뜨면 좋을 듯)
      - 인원수를 초과한 경우 (메시지 알려줄만 함 / 뭔가 모달이 뜨면 좋을 듯)
    - 선발 그리드 -> 선발 그리드에 드롭
      - 드래그/드롭한 선수 중 하나만 GK인 경우
  */
  const isAvailable = !selection || selection.type !== 'bench'; // starterGrid, emptyGrid, starterList로 구분해야 함. 셋이 로직이 다름.

  const handleDragStart = () => {
    console.log('starter drag start:', player);

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
    if (!isAvailable) {
      return;
    }

    e.preventDefault();
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

    if (!selection || !isAvailable) {
      return;
    }
    const { type, player: sourcePlayer } = selection;

    console.log('subItem drop', selection, player);

    switch (type) {
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
