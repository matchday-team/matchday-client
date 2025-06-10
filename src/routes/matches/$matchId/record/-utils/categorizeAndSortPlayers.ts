import { MatchUserResponse, TeamGroupedUsers } from '@/apis/models';

// NOTE: 선발/교체 명단은 시작 후 변하지 않고, subIn/Out 플래그만 바뀌므로 직접 분류해야 함.
// NOTE: matchGrid 역순으로 정렬하면 축구 규칙 상의 선발 명단 순서로 배치가 자연스럽게 됨
export const categorizeAndSortPlayers = ({
  starters,
  substitutes,
}: TeamGroupedUsers) => {
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
