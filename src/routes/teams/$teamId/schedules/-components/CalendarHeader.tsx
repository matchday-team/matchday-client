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
  month: number;
  filters: ScheduleFilter[];
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onFilterToggle: (category: string) => void;
}

export const CalendarHeader = ({
  month,
  filters,
  onPreviousMonth,
  onNextMonth,
  onFilterToggle,
}: CalendarHeaderProps) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.monthNavigation}>
        <button type='button' onClick={onPreviousMonth}>
          <ChevronLeftIcon className={styles.navButton} />
        </button>
        <div className={styles.monthText}>{monthNames[month - 1]}</div>
        <button type='button' onClick={onNextMonth}>
          <ChevronRightIcon className={styles.navButton} />
        </button>
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
};
