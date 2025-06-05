export const TEAM_TYPES = [
  'academy',
  'school',
  'club',
  'organizer',
  'association',
  'other',
] as const;

export const TEAM_TYPE_OPTIONS: Record<(typeof TEAM_TYPES)[number], string> = {
  academy: '학원(아카데미)',
  school: '학교',
  club: '동아리/동호회',
  organizer: '경기 주최사',
  association: '협회',
  other: '기타',
};
