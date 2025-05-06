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
