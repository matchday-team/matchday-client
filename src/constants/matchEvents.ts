export enum MatchEventType {
  GOAL = 'GOAL',
  ASSIST = 'ASSIST',
  SHOT = 'SHOT',
  VALID_SHOT = 'VALID_SHOT',
  FOUL = 'FOUL',
  OFFSIDE = 'OFFSIDE',
  SUB_IN = 'SUB_IN',
  SUB_OUT = 'SUB_OUT',
  YELLOW_CARD = 'YELLOW_CARD',
  RED_CARD = 'RED_CARD',
  OWN_GOAL = 'OWN_GOAL',
  CORNER_KICK = 'CORNER_KICK', // FIXME: 서버에서 미구현된 상태
  WARNING = 'WARNING', // FIXME: 서버에서 미구현된 상태
}

export const MatchEventNameMap: Record<MatchEventType, string> = {
  [MatchEventType.GOAL]: '득점',
  [MatchEventType.ASSIST]: '어시스트',
  [MatchEventType.SHOT]: '슈팅',
  [MatchEventType.VALID_SHOT]: '유효 슈팅',
  [MatchEventType.FOUL]: '파울',
  [MatchEventType.OFFSIDE]: '오프 사이드',
  [MatchEventType.SUB_IN]: '교체 출전',
  [MatchEventType.SUB_OUT]: '교체 퇴장',
  [MatchEventType.YELLOW_CARD]: '옐로 카드',
  [MatchEventType.RED_CARD]: '레드 카드',
  [MatchEventType.OWN_GOAL]: '자책골',
  [MatchEventType.CORNER_KICK]: '코너 킥',
  [MatchEventType.WARNING]: '경고',
};
