import * as styles from './TinyBarChart.css';

type TinyBarChartProps = {
  value: number;
  maxValue: number;
  isLeft: boolean;
  color: string;
};

/**
 * 좌측, 우측으로 간단한 BarChart 기능
 * 간단한 애니메이션을 탑재
 */
export const TinyBarChart = ({
  value,
  maxValue,
  isLeft,
  color,
}: TinyBarChartProps) => {
  const boundedValue = Math.min(value, maxValue);
  const width = (boundedValue / maxValue) * 100;

  return (
    <div className={styles.container({ left: isLeft })}>
      <div
        className={styles.bar}
        style={{
          width: `${width}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};
