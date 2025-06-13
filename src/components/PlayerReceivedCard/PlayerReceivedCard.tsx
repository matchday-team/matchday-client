import * as styles from './PlayerReceivedCard.css';

interface PlayerReceivedCardProps {
  yellowCards: number;
  redCards: number;
}

export const PlayerReceivedCard = ({
  yellowCards,
  redCards,
}: PlayerReceivedCardProps) => {
  return (
    <div className={styles.cautionContainer}>
      <div
        className={styles.playerCautionCard({
          variant: yellowCards > 0 ? 'yellow' : 'empty',
        })}
      />
      <div
        className={styles.playerCautionCard({
          variant: redCards > 0 ? 'red' : 'empty',
        })}
      />
    </div>
  );
};
