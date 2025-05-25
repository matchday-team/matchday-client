import { DragEvent, ReactElement } from 'react';

import { MatchUserCreateRequestRole } from '@/apis/models';
import {
  useCreateMatchUserMutation,
  useDeleteMatchUserMutation,
} from '@/apis/mutations';
import { useIsDragOver } from '@/hooks';

import {
  PlayerLineupEditSourceType,
  usePlayerLineupEditStore,
} from './playerLineupEditStore';

/*
  [도착 기준]
  - 팀 리스트
    - 팀 리스트 선수: 비허용

  - 선발 리스트
    - 팀 리스트 선수: 비허용
    - 선발 그리드 선수: 비허용
    - 선발 리스트 선수: 비허용
    - 교체 리스트 선수: 비허용

  - 교체 리스트
    - 교체 리스트 선수: 비허용
*/
const checkIsAvailable = (
  targetType: PlayerLineupEditSourceType,
  sourceType: PlayerLineupEditSourceType,
) => {
  const isFromSameList = targetType === sourceType; // NOTE: 동일 리스트로의 드롭은 무의미
  const isStarterList = targetType === 'starter'; // NOTE: matchGrid 값이 없으므로 배치가 불가능

  return !isStarterList && !isFromSameList;
};

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

export const PlayerAssignmentAdapterForList = <Target extends HTMLElement>({
  targetType,
  matchId,
  render,
}: PlayerAssignmentAdapterForListProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, finishAssignment } = usePlayerLineupEditStore();

  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  const isAvailable =
    !selection || checkIsAvailable(targetType, selection.type);

  const handleDragOver = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    console.log('list drag over');

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  /*
  [도착 기준]
  - 팀 리스트
    - 선발 그리드 선수: 선수를 선발에서 제거
    - 선발 리스트 선수: 선수를 선발에서 제거
    - 교체 리스트 선수: 선수를 교체에서 제거

  - 교체 리스트
    - 팀 리스트 선수: 교체 선수에 추가
    - 선발 그리드 선수: 선발 선수를 제거, 교체 선수에 추가
    - 선발 리스트 선수: 선발 선수를 제거, 교체 선수에 추가
  */
  const handleDrop = async (e: DragEvent<Target>) => {
    e.preventDefault();

    // 동일 리스트 출처인 경우, 선발 리스트인 경우 방어
    if (!isAvailable) {
      return;
    }

    const { selection } = usePlayerLineupEditStore.getState();
    if (!selection) {
      return;
    }

    const { type: sourceType, player: sourcePlayer } = selection;

    // 도착지 기준으로
    switch (targetType) {
      case 'all': // 팀 명단에 도착
        if (!sourcePlayer.matchUserId) {
          return;
        }
        await deleteMatchUser(sourcePlayer.matchUserId);
        break;
      case 'bench': // 교체 명단에 도착
        if (sourceType === 'all') {
          // 팀 명단에서 온 경우
          await createMatchUser({
            matchId,
            userId: sourcePlayer.id,
            teamId: sourcePlayer.teamId,
            role: MatchUserCreateRequestRole.SUB_PLAYER,
            matchPosition: sourcePlayer.matchPosition,
            matchGrid: null,
          });
        }
        if (sourceType === 'starter') {
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
        }
        break;
    }

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
