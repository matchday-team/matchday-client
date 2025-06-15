import clsx from 'clsx';

import { ChevronLeftIcon, ChevronRightIcon } from '@/assets/icons';
import type { ScheduleFilter } from '@/routes/teams/$teamId/schedules/-temp-server-types';

import * as styles from './CalendarHeader.css';

const monthNames = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

interface CalendarHeaderProps {
  year: number;
  month: number;
  filters: ScheduleFilter[];
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onFilterToggle: (category: string) => void;
}

function CalendarHeader({
  year,
  month,
  filters,
  onPreviousMonth,
  onNextMonth,
  onFilterToggle,
}: CalendarHeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.monthNavigation}>
        <ChevronLeftIcon
          className={styles.navButton}
          onClick={onPreviousMonth}
        />
        <div className={styles.monthText}>{monthNames[month - 1]}</div>
        <ChevronRightIcon className={styles.navButton} onClick={onNextMonth} />
      </div>
      <div className={styles.filtersContainer}>
        {filters.map(filter => (
          <div
            key={filter.category}
            className={clsx(
              styles.filterTag,
              !filter.isActive && styles.filterTagInactive,
            )}
            onClick={() => onFilterToggle(filter.category)}
          >
            <div
              className={clsx(
                styles.filterLabel,
                !filter.isActive && styles.filterLabelInactive,
              )}
            >
              {filter.category}
            </div>
            <div
              className={clsx(
                styles.filterCount,
                !filter.isActive && styles.filterCountInactive,
              )}
            >
              {filter.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarHeader;
