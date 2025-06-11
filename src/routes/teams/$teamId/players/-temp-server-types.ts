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
}

export interface PositionStat {
  position: string;
  count: number;
}

export interface Member {
  id: number;
  name: string;
  number: string;
  position: Position;
  foot: Foot;
  role: Role;
  joinDate: string;
  profileImage: string | null;
}
