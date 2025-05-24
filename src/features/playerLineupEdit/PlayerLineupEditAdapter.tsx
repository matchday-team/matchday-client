import { DragEvent, ReactElement } from 'react';

import { MatchUserResponse } from '@/apis/models';
import { useIsDragOver } from '@/hooks';

import {
  PlayerLineupEditSourceType,
  usePlayerLineupEditStore,
} from './playerLineupEditStore';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
  onDragStart: React.DragEventHandler<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
  onDragEnd: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerLineupEditAdapterProps<Element extends HTMLElement> = {
  mode: PlayerLineupEditSourceType;
  matchId: number;
  matchGrid: number;
  player: MatchUserResponse;
  render: RenderViewProps<Element>;
};

export const PlayerLineupEditAdapter = <Target extends HTMLElement>({
  mode,
  matchId,
  matchGrid, // 그리드 이외의 리스트에서는 null로 할지 -1로 할지 고민 중
  player,
  render,
}: PlayerLineupEditAdapterProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { beginAllocation, finishAllocation } = usePlayerLineupEditStore();

  /*
    [Action]
    1. 선발/교체 명단에 추가: 매치 유저 등록
    2. 선발/교체 명단 숫자 초과 불가: 현재 매치 유저 리스트 조회 필요
    3. 골키퍼 자리 제한: 드롭 시 그리드 체크 필요
    4. 

    [Read]
    1. 팀 명단에서 선발/교체 명단에 포함된 사람은 제외 필요 -> 페이지에서 진행 (추후 커스텀 훅으로 빼면 될 듯 - usePlayerLineupEditQuery? 같은 느낌)
    2. 선발/교체 명단 인원수 못 채운 경우 진행 버튼 비활성화
  */
  const isAvailable = true; // 추후 로직?

  /*
  - 드래그가 금지되어야 하는 경우는 없음
  */
  const handleDragStart = (e: DragEvent<Target>) => {
    e.dataTransfer.setData('text/plain', player.id.toString());
    beginAllocation(mode, player.id);
  };

  /*
  - 드롭이 불가능한 경우 (어차피 동일)
    - 팀 리스트 -> 팀 리스트에 드롭
    - 선발 리스트 -> 선발 리스트에 드롭
    - 팀 리스트 -> 선발 리스트에 드롭
    - 팀 리스트 -> 선발 그리드에 드롭
      - 골키퍼가 골키퍼 자리에 있지 않은 경우 (이거는 메시지 띄워줄만 한데? 뭐가 문젠지 알기 어려울 듯? / 뭔가 모달이 뜨면 좋을 듯)
      - 인원수를 초과한 경우 (메시지 알려줄만 함 / 뭔가 모달이 뜨면 좋을 듯)
    - 선발 그리드 -> 선발 그리드에 드롭
      - 드래그/드롭한 선수 중 하나만 GK인 경우
    - 팀 리스트/선발 그리드 -> 교체 리스트에 드롭
      - 교체 인원수 제한이 넘는 경우
  */
  const handleDragOver = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  /*
  [도착 기준]
  - 팀 리스트
    - 팀 리스트 선수: 비허용
    - 선발 그리드 선수: 선수를 선발에서 제거
    - 선발 리스트 선수: 선수를 선발에서 제거
    - 교체 리스트 선수: 선수를 교체에서 제거

  - 팀 리스트 선수
    - 팀 리스트 선수: 비허용
    - 선발 그리드 선수: 선발에서 선수 제거, 팀 리스트 선수를 선발에 추가(matchGrid 유지)
    - 선발 리스트 선수: 선발에서 선수 제거, 팀 리스트 선수를 선발에 추가(matchGrid 유지)
    - 교체 리스트 선수: 교체에서 선수 제거, 팀 리스트 선수를 교체에 추가

  - 선발 그리드 빈칸
    - 팀 리스트 선수: 해당 matchGrid에 팀 리스트 선수를 선발에 추가
    - 선발 그리드 선수: 매치유저 그리드 좌표 변경 API 호출
    - 선발 리스트 선수: 매치유저 그리드 좌표 변경 API 호출
    - 교체 리스트 선수: 교체 선수를 제거, 교체 선수를 선발에 추가(matchGrid 유지)

  - 선발 그리드 선수
    - 팀 리스트 선수: 선발 선수 제거, 드래그한 선수를 선발에 추가(matchGrid 유지)
    - 선발 그리드 선수: 매치유저 그리드 좌표 변경 API 호출
    - 선발 리스트 선수: 매치유저 그리드 좌표 변경 API 호출
    - 교체 리스트 선수: 선발 선수를 제거, 교체 선수를 제거, 선발 선수를 교체에 추가, 교체 선수를 선발에 추가(matchGrid 유지)
  
  - 선발 리스트
    - 팀 리스트 선수: 비허용
    - 선발 그리드 선수: 비허용
    - 선발 리스트 선수: 비허용
    - 교체 리스트 선수: 비허용

  - 선발 리스트 선수 (선수 그리드와 동일)
    - 팀 리스트 선수: 선발 선수 제거, 드래그한 선수를 선발에 추가(matchGrid 유지)
    - 선발 그리드 선수: 매치유저 그리드 좌표 변경 API 호출
    - 선발 리스트 선수: 매치유저 그리드 좌표 변경 API 호출
    - 교체 리스트 선수: 선발 선수를 제거, 교체 선수를 제거, 선발 선수를 교체에 추가, 교체 선수를 선발에 추가(matchGrid 유지)
  
  - 교체 리스트
    - 팀 리스트 선수: 교체 선수에 추가
    - 선발 그리드 선수: 선발 선수를 제거, 교체 선수에 추가
    - 선발 리스트 선수: 선발 선수를 제거, 교체 선수에 추가
    - 교체 리스트 선수: 비허용

  - 교체 리스트 선수
    - 팀 리스트 선수: 교체 선수를 제거, 팀 선수를 교체에 추가
    - 선발 그리드 선수: 선발 선수를 제거, 교체 선수를 제거, 선발 선수를 교체에 추가, 교체 선수를 선발에 추가(matchGrid 유지)
    - 선발 리스트 선수: 선발 선수를 제거, 교체 선수를 제거, 선발 선수를 교체에 추가, 교체 선수를 선발에 추가(matchGrid 유지)
    - 교체 리스트 선수: 비허용
  */
  const handleDrop = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    const counterpartPlayerId = Number(e.dataTransfer.getData('text/plain'));
  };

  return render({
    isDragOver,
    disabled: !isAvailable,
    ref: hoverTargetRef,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onDragEnd: finishAllocation,
  });
};
