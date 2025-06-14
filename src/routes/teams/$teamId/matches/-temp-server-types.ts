export type MatchType = '친선경기' | '리그' | '대회';
export type MatchResult = '승' | '패' | '무';

export interface Match {
  id: number;
  type: MatchType;
  name: string;
  opponentTeam: string;
  opponentLogo: string;
  result: MatchResult;
  duration: number; // 경기 시간 (분)
  location: string;
  date: string; // ISO date string
  homeScore?: number;
  awayScore?: number;
}

export interface TeamStats {
  id: number;
  name: string;
  logo: string;
  matchesPlayed: number;
  topScorer: string;
  wins: number;
  losses: number;
  draws: number;
  goalsFor: number;
  goalsAgainst: number;
  recentMatches: MatchResult[]; // 최근 5경기 결과
}

export interface MatchFilters {
  search: string;
  teamFilter: string;
  resultFilter: string;
  sortOrder: string;
}

export interface Goal {
  time: string;
  playerName: string;
  team: 'home' | 'away';
}

export interface TeamData {
  id: number;
  name: string;
  logo: string;
  isHome: boolean;
  teamColor: string;
  score: number;
}

export interface PlayerStat {
  id: number;
  number: number;
  name: string;
  position: string;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  isStarter: boolean;
}
