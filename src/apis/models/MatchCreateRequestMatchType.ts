/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * MatchDay Swagger
 * MatchDay 요구사항에 대한 REST API
 * OpenAPI spec version: 0.0.1
 */

/**
 * 매치 타입(리그/대회/친선)
 */
export type MatchCreateRequestMatchType =
  (typeof MatchCreateRequestMatchType)[keyof typeof MatchCreateRequestMatchType];

export const MatchCreateRequestMatchType = {
  리그: '리그',
  대회: '대회',
  친선경기: '친선경기',
} as const;
