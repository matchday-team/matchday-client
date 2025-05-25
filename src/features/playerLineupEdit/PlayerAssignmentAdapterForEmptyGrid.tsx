import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import { MatchUserCreateRequestRole } from '@/apis/models';
import {
  useCreateMatchUserMutation,
  useDeleteMatchUserMutation,
  usePatchMatchUserGridMutation,
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

  const isAvailable = true;

  const handleDragOver = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  /*
  [도착 기준]
  - 선발 그리드 빈칸
    - 팀 리스트 선수: 해당 matchGrid에 팀 리스트 선수를 선발에 추가
    - 선발 그리드 선수: 매치유저 그리드 좌표 변경 API 호출
    - 선발 리스트 선수: 매치유저 그리드 좌표 변경 API 호출
    - 교체 리스트 선수: 교체 선수를 제거, 교체 선수를 선발에 추가(matchGrid 유지)

  */
  const handleDrop = async () => {
    if (!selection || !isAvailable) {
      return;
    }
    const { type, player: sourcePlayer } = selection;

    switch (type) {
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
      case 'starter-grid': // 선발 명단
        patchMatchUserGrid({
          matchUserId: sourcePlayer.matchUserId,
          matchGrid,
        });
        break;
      case 'bench': // 교체 명단
        await deleteMatchUser(sourcePlayer.id);
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
        console.warn('Unknown target mode:', type);
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
    onDragEnd: finishAssignment,
  });
};
