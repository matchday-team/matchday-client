// NOTE: mock용으로 생성했던 함수여서 앞으로는 필요 없을 듯
export const getTimeAgo = ({
  minutes = 0,
  seconds = 0,
  now = Math.floor(new Date().getTime() / 1000),
}: { minutes?: number; seconds?: number; now?: number } = {}): number => {
  return now - (minutes * 60 + seconds);
};

export const getHHMMSSofDate = (date = new Date()) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const getTodaySeconds = (date: Date | string = new Date()) => {
  if (typeof date === 'string') {
    const [hours, minutes, seconds] = date.split(':').map(Number);

    return hours * 3600 + minutes * 60 + seconds;
  }

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return hours * 3600 + minutes * 60 + seconds;
};

export const formatMMSSfromSeconds = (rawSeconds: number) => {
  const minutes = Math.floor(rawSeconds / 60);
  const seconds = rawSeconds % 60;

  const minutesToDisplay = minutes.toString().padStart(2, '0');
  const secondsToDisplay = seconds.toString().padStart(2, '0');

  return `${minutesToDisplay}:${secondsToDisplay}`;
};
