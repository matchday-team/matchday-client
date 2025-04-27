export const getUnixTimestampInSeconds = (now: Date = new Date()) => {
  return Math.floor(now.getTime() / 1000);
};

export const getTimeAgo = ({
  minutes = 0,
  seconds = 0,
}: { minutes?: number; seconds?: number } = {}): number => {
  return getUnixTimestampInSeconds() - (minutes * 60 + seconds);
};
