export type Position = 'FW' | 'MF' | 'DF' | 'GK';
export type Foot = '왼발' | '오른발' | '양발';
export type Role = '일반' | '관리자';

export interface Member {
  id: number;
  name: string;
  number: string;
  position: Position;
  foot: Foot;
  role: Role;
  joinDate: string;
  profileImage: string | null;
  birthDate: string;
  height: string;
  weight: string;
  secondaryPosition: Position;
}

export interface PositionStat {
  position: Position;
  count: number;
}

export interface MatchRecord {
  id: number;
  opponentTeam: string;
  opponentLogo: string;
  homeScore: number;
  awayScore: number;
  isWin: boolean;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
}
