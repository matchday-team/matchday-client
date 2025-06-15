import { Goal } from '@/routes/teams/$teamId/matches/-temp-server-types';

import * as styles from './GoalList.css';

export interface GoalListProps {
  goals: Goal[];
}

export const GoalList = ({ goals }: GoalListProps) => {
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
};
