import { ChevronLeftIcon, ChevronRightIcon } from '@/assets/icons';
import type { CalendarDay } from '@/routes/teams/$teamId/index/-temp-server-types';

import * as styles from './ScheduleCalendar.css';

interface ScheduleCalendarProps {
  currentMonth: string;
  calendarDays: CalendarDay[];
}

interface CalendarDayProps {
  day: number;
  isCurrentMonth: boolean;
  isSelected?: boolean;
  hasEvent?: boolean;
}

const CalendarDay = ({
  day,
  isCurrentMonth,
  isSelected,
  hasEvent,
}: CalendarDayProps) => {
  return (
    <div className={styles.dayContainer}>
      <div
        className={isSelected ? styles.selectedDayContent : styles.dayContent}
      >
        {hasEvent && !isSelected && <div className={styles.eventDot}></div>}
        {hasEvent && isSelected && (
          <div className={styles.selectedEventDot}></div>
        )}
        <span
          className={
            isSelected
              ? styles.selectedDayText
              : isCurrentMonth
                ? styles.currentMonthDayText
                : styles.otherMonthDayText
          }
        >
          {day}
        </span>
      </div>
    </div>
  );
};

export const ScheduleCalendar = ({
  currentMonth,
  calendarDays,
}: ScheduleCalendarProps) => {
  const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>일정</h2>
        <div className={styles.moreSection}>
          <span className={styles.moreText}>자세히 보기</span>
          <ChevronRightIcon className={styles.chevronIcon} />
        </div>
      </div>

      <div className={styles.calendarContainer}>
        <div className={styles.monthNavigation}>
          <ChevronLeftIcon />
          <span className={styles.monthText}>{currentMonth}</span>
          <ChevronRightIcon />
        </div>

        <div className={styles.calendarGrid}>
          <div className={styles.weekHeader}>
            {daysOfWeek.map(day => (
              <div key={day} className={styles.weekDayContainer}>
                <span className={styles.weekDayText}>{day}</span>
              </div>
            ))}
          </div>

          {Array.from({ length: 6 }, (_, weekIndex) => (
            <div key={weekIndex} className={styles.weekRow}>
              {calendarDays
                .slice(weekIndex * 7, (weekIndex + 1) * 7)
                .map((dayData, dayIndex) => (
                  <CalendarDay
                    key={`${weekIndex}-${dayIndex}`}
                    day={dayData.day}
                    isCurrentMonth={dayData.isCurrentMonth}
                    isSelected={dayData.isSelected}
                    hasEvent={dayData.hasEvent}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
