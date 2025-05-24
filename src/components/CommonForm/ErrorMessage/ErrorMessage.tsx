import * as styles from './ErrorMessage.css';

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  if (!message) return null;

  return <span className={styles.textFieldError}>{message}</span>;
};

ErrorMessage.displayName = 'ErrorMessage';
