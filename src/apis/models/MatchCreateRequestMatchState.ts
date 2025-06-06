/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * MatchDay Swagger
 * 개발용 Swagger API 문서
 * OpenAPI spec version: 0.0.1
 */

/**
 * 경기 상태 (SCHEDULED, ONGOING, FINISHED)
 */
export type MatchCreateRequestMatchState =
  (typeof MatchCreateRequestMatchState)[keyof typeof MatchCreateRequestMatchState];

export const MatchCreateRequestMatchState = {
  SCHEDULED: 'SCHEDULED',
  PLAY_FIRST_HALF: 'PLAY_FIRST_HALF',
  HALF_TIME: 'HALF_TIME',
  PLAY_SECOND_HALF: 'PLAY_SECOND_HALF',
  FINISHED: 'FINISHED',
} as const;
