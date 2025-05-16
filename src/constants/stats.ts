import { ScoreResponse } from '@/apis/models';

import { MatchEventType } from './matchEvents';

export type Stat =
  | '득점'
  | '슈팅'
  | '유효 슈팅'
  | '코너 킥'
  | '오프 사이드'
  | '파울'
  | '경고'
  | '자책골';

export const teamStatList: Stat[] = [
  '득점',
  '슈팅',
  '유효 슈팅',
  '코너 킥',
  '오프 사이드',
  '파울',
  '경고',
  '자책골',
];

export const compareStatList: Stat[] = [
  '슈팅',
  '유효 슈팅',
  '코너 킥',
  '오프 사이드',
  '파울',
  '경고',
];

export const mapStatResponseField: Record<Stat, keyof ScoreResponse> = {
  득점: 'goalCount',
  슈팅: 'goalCount',
  '유효 슈팅': 'validShotCount',
  '코너 킥': 'cornerKickCount',
  '오프 사이드': 'offsideCount',
  파울: 'foulCount',
  경고: 'warningCount',
  자책골: 'ownGoalCount',
};

export const mapStatRequestField: Record<Stat, MatchEventType> = {
  득점: MatchEventType.GOAL,
  슈팅: MatchEventType.SHOT,
  '유효 슈팅': MatchEventType.VALID_SHOT,
  '코너 킥': MatchEventType.CORNER_KICK,
  '오프 사이드': MatchEventType.OFFSIDE,
  파울: MatchEventType.FOUL,
  경고: MatchEventType.WARNING,
  자책골: MatchEventType.OWN_GOAL,
};
