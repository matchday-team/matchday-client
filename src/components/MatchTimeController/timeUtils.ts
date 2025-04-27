export const getUnixTimestampInSeconds = (now: Date = new Date()) => {
  return Math.floor(now.getTime() / 1000);
};

export const getTimeAgo = ({
  minutes = 0,
  seconds = 0,
}: { minutes?: number; seconds?: number } = {}): number => {
  return getUnixTimestampInSeconds() - (minutes * 60 + seconds);
};

export const getTimerText = (startedAt: number) => {
  const now = getUnixTimestampInSeconds();
  const elapsedSeconds = now - startedAt;
  const minutes = Math.floor(elapsedSeconds / 60);
  const seconds = elapsedSeconds % 60;

  const minutesToDisplay = minutes.toString().padStart(2, '0');
  const secondsToDisplay = seconds.toString().padStart(2, '0');

  return `${minutesToDisplay}:${secondsToDisplay}`;
};
