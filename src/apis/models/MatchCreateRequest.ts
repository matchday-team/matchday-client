/**
 * Generated by orval v7.9.0 🍺
 * Do not edit manually.
 * MatchDay Swagger
 * 개발용 Swagger API 문서
 * OpenAPI spec version: 0.0.1
 */
import type { MatchCreateRequestMatchType } from './MatchCreateRequestMatchType';

export interface MatchCreateRequest {
  /** 경기명 */
  title: string;
  /** 홈팀 id */
  homeTeamId: number;
  /** 상대팀 id */
  awayTeamId: number;
  /** 매치 타입(리그/대회/친선) */
  matchType: MatchCreateRequestMatchType;
  /** 경기장 주소 */
  stadium: string;
  /** 경기 일자 */
  matchDate: string;
  plannedStartTime: string;
  plannedEndTime: string;
  /** 전반 진행 시간 (분) */
  firstHalfPeriod: number;
  /** 후반 진행 시간 (분) */
  secondHalfPeriod: number;
  /**
   * 주심
   * @nullable
   */
  mainRefereeName: string | null;
  /**
   * 부심1
   * @nullable
   */
  assistantReferee1: string | null;
  /**
   * 부심2
   * @nullable
   */
  assistantReferee2: string | null;
  /**
   * 대기심
   * @nullable
   */
  fourthReferee: string | null;
}
