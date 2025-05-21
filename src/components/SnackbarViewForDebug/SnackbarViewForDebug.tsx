import * as styles from './SnackbarViewForDebug.css';

interface SnackbarViewForDebugProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  message: string;
  ref: React.Ref<HTMLDivElement>; // NOTE: React 19부터 ForwardRef 필요 없어짐
}

export const SnackbarViewForDebug = ({
  variant,
  message,
  ref,
}: SnackbarViewForDebugProps) => (
  <div ref={ref} className={styles.rootContainer}>
    <div className={styles.messageColor({ variant })}></div>
    <div>{message}</div>
  </div>
);
