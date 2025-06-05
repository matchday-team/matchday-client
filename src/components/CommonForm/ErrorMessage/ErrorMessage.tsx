import { PropsWithChildren } from 'react';

import * as styles from './ErrorMessage.css';

export const ErrorMessage = ({ children }: PropsWithChildren) => (
  <span className={styles.textFieldError}>{children}</span>
);
