import * as styles from './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

export const Button = ({ isActive, ...props }: ButtonProps) => {
  return <button className={styles.controlButton({ isActive })} {...props} />;
};
