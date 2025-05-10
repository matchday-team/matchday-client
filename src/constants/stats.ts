import { ScoreResponse } from '@/apis/models';

export type Stat =
  | '득점'
  | '슈팅'
  | '유효 슈팅'
  | '코너 킥'
  | '오프 사이드'
  | '파울'
  | '경고'
  | '자책골';

export const STAT_LIST: Stat[] = [
  '득점',
  '슈팅',
  '유효 슈팅',
  '코너 킥',
  '오프 사이드',
  '파울',
  '경고',
  '자책골',
];

export const STAT_LIST_FOR_COMPARE: Stat[] = [
  '슈팅',
  '유효 슈팅',
  '코너 킥',
  '오프 사이드',
  '파울',
  '경고',
];

export const statMapper: Record<Stat, keyof ScoreResponse> = {
  득점: 'goalCount',
  슈팅: 'goalCount',
  '유효 슈팅': 'validShotCount',
  '코너 킥': 'cornerKickCount',
  '오프 사이드': 'offsideCount',
  파울: 'foulCount',
  경고: 'warningCount',
  자책골: 'ownGoalCount',
};
