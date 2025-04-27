export const getUnixTimestampInSeconds = (now: Date = new Date()) => {
  return Math.floor(now.getTime() / 1000);
};

export const getTimeAgo = ({
  minutes = 0,
  seconds = 0,
  now = getUnixTimestampInSeconds(),
}: { minutes?: number; seconds?: number; now?: number } = {}): number => {
  return now - (minutes * 60 + seconds);
};

export const getTimerText = (
  startedAt: number,
  now: number = getUnixTimestampInSeconds(),
) => {
  const elapsedSeconds = now - startedAt;
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  const minutesToDisplay = minutes.toString().padStart(2, '0');
  const secondsToDisplay = seconds.toString().padStart(2, '0');

  return `${minutesToDisplay}:${secondsToDisplay}`;
};
