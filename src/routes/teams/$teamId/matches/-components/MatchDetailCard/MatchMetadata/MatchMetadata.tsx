import * as styles from './MatchMetadata.css';

export interface MatchMetadataProps {
  duration: number;
  playersPlayed: number;
  totalPlayers: number;
  date: string;
  location: string;
}

export function MatchMetadata({
  duration,
  playersPlayed,
  totalPlayers,
  date,
  location,
}: MatchMetadataProps) {
  return (
    <div className={styles.container}>
      <Row label='경기 시간' value={`${duration}분`} />
      <Row label='출전 선수' value={`${playersPlayed}명 / ${totalPlayers}명`} />
      <Row label='날짜' value={date} />
      <Row label='장소' value={location} />
    </div>
  );
}

const Row = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};
