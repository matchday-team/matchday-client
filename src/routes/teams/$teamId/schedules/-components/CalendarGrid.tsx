import clsx from 'clsx';

import type {
  CalendarDay,
  ScheduleFilter,
} from '@/routes/teams/$teamId/schedules/-temp-server-types';

import * as styles from './CalendarGrid.css';

const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

const getEventClassName = (category: string) => {
  switch (category) {
    case '대회/리그':
      return styles.eventLeague;
    case '친선 매치':
      return styles.eventFriendly;
    case '기타':
      return styles.eventOther;
    default:
      return styles.eventOther;
  }
};

const filterVisibleSchedules = (
  day: CalendarDay,
  filters: ScheduleFilter[],
) => {
  return day.schedules.filter(schedule => {
    const filter = filters.find(f => f.category === schedule.category);

    return filter?.isActive ?? true;
  });
};

const formatDateString = (year: number, month: number, dayNumber: number) => {
  return `${year}-${month.toString().padStart(2, '0')}-${dayNumber.toString().padStart(2, '0')}`;
};

interface CalendarGridProps {
  days: CalendarDay[];
  filters: ScheduleFilter[];
  onDateSelect: (date: string, dayNumber: number) => void;
  year: number;
  month: number;
}

export const CalendarGrid = ({
  days,
  filters,
  onDateSelect,
  year,
  month,
}: CalendarGridProps) => {
  const weeks = Array.from({ length: Math.ceil(days.length / 7) }, (_, index) =>
    days.slice(index * 7, (index + 1) * 7),
  );

  return (
    <div className={styles.gridContainer}>
      <div className={styles.row}>
        {weekDays.map(day => (
          <div key={day} className={styles.weekHeaderCell}>
            <div className={styles.eventIndicators} />
            <div className={styles.weekHeaderText}>{day}</div>
          </div>
        ))}
      </div>
      {weeks.map((week, weekIndex) => {
        const isInactiveWeek = week.every(day => !day.isCurrentMonth);

        return (
          <div
            key={weekIndex}
            className={clsx(styles.row, isInactiveWeek && styles.dayInactive)}
          >
            {week.map((day, dayIndex) =>
              renderDayCell(
                day,
                weekIndex * 7 + dayIndex,
                filters,
                year,
                month,
                onDateSelect,
              ),
            )}
          </div>
        );
      })}
    </div>
  );
};

const renderDayCell = (
  day: CalendarDay,
  index: number,
  filters: ScheduleFilter[],
  year: number,
  month: number,
  onDateSelect: (date: string, dayNumber: number) => void,
) => {
  const visibleSchedules = filterVisibleSchedules(day, filters);
  const hasEvents = visibleSchedules.length > 0 && day.isCurrentMonth;

  const handleClick = () => {
    if (day.isCurrentMonth) {
      const dateString = formatDateString(year, month, day.date);
      onDateSelect(dateString, day.date);
    }
  };

  return (
    <div
      key={index}
      className={clsx({
        [styles.dayCell]: true,
        [styles.dayCellWithEvents]: hasEvents,
      })}
      onClick={handleClick}
    >
      <div
        className={clsx(
          styles.dayNumber,
          day.isToday && styles.dayNumberToday,
          day.isSelected && styles.dayNumberSelected,
          !day.isCurrentMonth && styles.dayNumberInactive,
        )}
      >
        {day.date}
      </div>
      <div className={styles.eventListContainer}>
        {visibleSchedules.map(schedule => (
          <div
            key={schedule.id}
            className={clsx(
              styles.eventItem,
              getEventClassName(schedule.category),
            )}
          >
            {schedule.startTime} {schedule.title}
          </div>
        ))}
      </div>
    </div>
  );
};
