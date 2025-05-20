import { MatchUserResponse, TeamGroupedUsers } from '@/apis/models';

export const dividePlayers = ({ starters, substitutes }: TeamGroupedUsers) => {
  const result = {
    starters: [] as MatchUserResponse[],
    substitutes: [] as MatchUserResponse[],
  };

  starters.forEach(player => {
    const targetArray =
      player.subOut || player.sentOff ? result.substitutes : result.starters;
    targetArray.push(player);
  });

  substitutes.forEach(player => {
    const targetArray = player.subIn ? result.starters : result.substitutes;
    targetArray.push(player);
  });

  result.starters.sort((a, b) => (b.matchGrid ?? 0) - (a.matchGrid ?? 0));

  result.substitutes.sort((a, b) => {
    const aDisabled = a.subOut || a.sentOff;
    const bDisabled = b.subOut || b.sentOff;

    // 둘 다 disabled거나 아닐 때는 matchGrid 순으로 정렬
    if (aDisabled === bDisabled) {
      return (b.matchGrid ?? 0) - (a.matchGrid ?? 0);
    } else if (aDisabled && !bDisabled) {
      return 1; // a만 disabled면 a를 뒤로
    } else {
      return -1; // b만 disabled면 b를 뒤로
    }
  });

  return result;
};
