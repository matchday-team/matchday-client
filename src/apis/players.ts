export interface StartingPlayer {
  id: number;
  name: string;
  number: number;
  position: string;
  profileImageUrl: string;
  goals: number;
  assists: number;
  fouls: number;
  yellowCards: number;
  redCards: number;
}

export interface StartingPlayerOnGrid extends StartingPlayer {
  grid: number;
}
