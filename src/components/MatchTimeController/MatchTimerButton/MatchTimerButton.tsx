import { ExclamationIcon } from '@/assets/icons';
import { lightThemeVars } from '@/styles/theme.css';

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
        <ExclamationIcon
          color={
            // FIXME: Vanilla Extract에서 처리하고 싶은데 방법=?
            !disabled
              ? lightThemeVars.color.warning
              : lightThemeVars.color.gray[300]
          }
        />
      )}
      {children}
    </button>
  );
};
