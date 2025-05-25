import * as styles from './ErrorMessage.css';

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <span className={styles.textFieldError}>{message}</span>
);
