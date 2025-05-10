export type MatchEventType =
  | 'GOAL'
  | 'ASSIST'
  | 'SHOT'
  | 'VALID_SHOT'
  | 'FOUL'
  | 'OFFSIDE'
  | 'SUB_IN'
  | 'SUB_OUT'
  | 'YELLOW_CARD'
  | 'RED_CARD'
  | 'OWN_GOAL';

export const MatchEventNameMap: Record<MatchEventType, string> = {
  GOAL: '득점',
  ASSIST: '어시스트',
  SHOT: '슈팅',
  VALID_SHOT: '유효 슈팅',
  FOUL: '파울',
  OFFSIDE: '오프 사이드',
  SUB_IN: '교체 출전',
  SUB_OUT: '교체 퇴장',
  YELLOW_CARD: '옐로 카드',
  RED_CARD: '레드 카드',
  OWN_GOAL: '자책골',
};
