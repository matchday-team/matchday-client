const KST_OFFSET = 9 * 60 * 60 * 1000; // KST UTC+9
const TWO_HOURS = 2 * 60 * 60 * 1000;

const getKSTDate = () => new Date(Date.now() + KST_OFFSET);

export const getYYYYMMDDHHMMSS = () =>
  getKSTDate()
    .toISOString()
    .replace(/[-:T.Z]/g, '')
    .slice(0, 14);

export const YYYYMMDD = () => getKSTDate().toISOString().slice(0, 10);
export const nowHHMMSS = () => getKSTDate().toISOString().slice(11, 19);
export const twoHoursLaterHHMMSS = () =>
  new Date(Date.now() + KST_OFFSET + TWO_HOURS).toISOString().slice(11, 19);

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
