import { StartingPlayer } from './players';
import { Team } from './teams';

export interface MatchLog {
  id: number;
  time: Date;
  team: Team;
  player: StartingPlayer;
  action: string;
}
