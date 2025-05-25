import { MatchUserResponse } from '@/apis/models';

import { SubstitutionSourceType } from './playerSubstitutionStore';

export const checkPlayerAvailable: Record<
  SubstitutionSourceType,
  (player: MatchUserResponse) => boolean
> = {
  bench: player => !player.subOut && !player.sentOff,
  starter: player => !player.subIn,
};
