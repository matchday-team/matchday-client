import type { Schedule } from '@/routes/teams/$teamId/schedules/-temp-server-types';

import * as styles from './ScheduleItem.css';

interface ScheduleItemProps {
  schedule: Schedule;
  onEdit?: (scheduleId: string) => void;
}

export const ScheduleItem = ({ schedule, onEdit }: ScheduleItemProps) => {
  const handleEditClick = () => {
    if (onEdit) {
      onEdit(schedule.id);
    }
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.headerContainer}>
        <button
          type='button'
          className={styles.editButton}
          onClick={handleEditClick}
        >
          수정하기
        </button>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.title}>{schedule.title}</div>
        <div className={styles.infoContainer}>
          <div className={styles.location}>{schedule.location}</div>
          <div className={styles.timeContainer}>
            <div className={styles.timeText}>{schedule.startTime}</div>
            <div className={styles.timeText}>~</div>
            <div className={styles.timeText}>{schedule.endTime}</div>
          </div>
        </div>
      </div>
      <div className={styles.categoryTag}>{schedule.category}</div>
    </div>
  );
};
