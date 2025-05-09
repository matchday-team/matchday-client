import { ExclamationIcon } from '@/assets/icons';

import * as styles from './MatchTimerButton.css';

interface MatchTimerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'danger';
}

export const MatchTimerButton = ({
  variant,
  disabled,
  children,
  ...props
}: MatchTimerButtonProps) => {
  return (
    <button
      className={styles.rootContainer({ variant })}
      disabled={disabled}
      {...props}
    >
      {variant === 'danger' && (
        <ExclamationIcon className={styles.dangerIcon({ disabled })} />
      )}
      {children}
    </button>
  );
};
