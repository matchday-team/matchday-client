import * as styles from './GoalList.css';

export interface Goal {
  time: string;
  playerName: string;
  team: 'home' | 'away';
}

export interface GoalListProps {
  goals: Goal[];
}

export function GoalList({ goals }: GoalListProps) {
  return (
    <div className={styles.rootContainer}>
      {goals.map((goal, index) => (
        <div key={index} className={styles.goalItem({ team: goal.team })}>
          <div className={styles.goalText({ team: goal.team })}>
            {goal.time}&quot; {goal.playerName}
          </div>
        </div>
      ))}
    </div>
  );
}
