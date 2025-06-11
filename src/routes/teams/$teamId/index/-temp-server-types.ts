export interface TeamInfo {
  name: string;
  description: string;
  logoUrl: string | null;
  leader: string;
  foundedYear: number;
  region: string;
  memberCount: number;
  uniformColors: {
    top: string;
    bottom: string;
    socks: string;
  };
}

export interface MatchResult {
  date: string;
  duration: string;
  homeTeam: {
    name: string;
    logo: string | null;
    score: number;
    uniformColor: {
      top: string;
      bottom: string;
      socks: string;
    };
  };
  awayTeam: {
    name: string;
    logo: string | null;
    score: number;
    uniformColor: {
      top: string;
      bottom: string;
      socks: string;
    };
  };
}

export interface Notice {
  title: string;
  author: string;
  date: string;
}

export interface CalendarDay {
  day: number;
  isCurrentMonth: boolean;
  isSelected?: boolean;
  hasEvent?: boolean;
}
