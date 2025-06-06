import * as styles from './MatchCreateStepper.css';

interface StepProps {
  text: string;
  isActive: boolean;
  step: 1 | 2 | 3;
}

function Step({ text, isActive, step }: StepProps) {
  return (
    <div className={styles.step({ isActive, step })}>
      <div className={styles.stepContent}>
        <div className={styles.stepNumber}>
          <p className={styles.stepText}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export function MatchCreateStepper() {
  return (
    <div className={styles.container}>
      <div className={styles.stepperWrapper}>
        <div className={styles.stepLine} />
        <Step text='1' isActive={true} step={1} />
        <Step text='2' isActive={false} step={2} />
        <Step text='2-1' isActive={false} step={3} />
      </div>
    </div>
  );
}
