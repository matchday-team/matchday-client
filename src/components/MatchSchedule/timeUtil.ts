export const getKoreanWeekday = (year: number, month: number, day: number) => {
  const dateUtcMidnight = new Date(Date.UTC(year, month - 1, day));
  const formatter = new Intl.DateTimeFormat('ko-KR', {
    weekday: 'short',
    timeZone: 'Asia/Seoul',
  });

  return formatter.format(dateUtcMidnight);
};
