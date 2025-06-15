import type { ScheduleDetailData } from '@/routes/teams/$teamId/schedules/-temp-server-types';

import * as styles from './ScheduleDetailPanel.css';
import ScheduleItem from './ScheduleItem';

interface ScheduleDetailPanelProps {
  data: ScheduleDetailData;
  onCreateSchedule?: () => void;
  onEditSchedule?: (scheduleId: string) => void;
}

function ScheduleDetailPanel({
  data,
  onCreateSchedule,
  onEditSchedule,
}: ScheduleDetailPanelProps) {
  const formatDisplayDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return { month: `${month}월`, day: `${day}일` };
  };

  const { month, day } = formatDisplayDate(data.selectedDate);

  const handleCreateClick = () => {
    if (onCreateSchedule) {
      onCreateSchedule();
    }
  };

  return (
    <div className={styles.rootContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.dateSection}>
            <div className={styles.dateText}>
              <span className={styles.monthText}>{month}</span>
              <span className={styles.dayText}>{day}</span>
            </div>
            <div className={styles.dayOfWeek}>{data.dayOfWeek}</div>
          </div>
          <button className={styles.createButton} onClick={handleCreateClick}>
            <div className={styles.createIcon}>
              <svg width='12' height='12' viewBox='0 0 14 14' fill='none'>
                <path
                  d='M1 7H13'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
                <path
                  d='M7 1L7 13'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
              </svg>
            </div>
            일정 생성하기
          </button>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.scheduleHeader}>
          <span className={styles.scheduleLabel}>등록된 일정</span>
          <span className={styles.scheduleCount}>
            {data.schedules.length}개
          </span>
        </div>

        <div className={styles.scheduleListContainer}>
          {data.schedules.length > 0 ? (
            data.schedules.map(schedule => (
              <ScheduleItem
                key={schedule.id}
                schedule={schedule}
                onEdit={onEditSchedule}
              />
            ))
          ) : (
            <div className={styles.emptyState}>등록된 일정이 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ScheduleDetailPanel;
