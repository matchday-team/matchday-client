import type { CalendarData } from '@/routes/teams/$teamId/schedules/-temp-server-types';

import { CalendarGrid } from './CalendarGrid';
import { CalendarHeader } from './CalendarHeader';
import * as styles from './ScheduleCalendar.css';

interface ScheduleCalendarProps {
  data: CalendarData;
  onDateSelect: (date: string, dayNumber: number) => void;
  onMonthChange: (year: number, month: number) => void;
  onFilterToggle: (category: string) => void;
}

export const ScheduleCalendar = ({
  data,
  onDateSelect,
  onMonthChange,
  onFilterToggle,
}: ScheduleCalendarProps) => {
  const handlePreviousMonth = () => {
    let newYear = data.year;
    let newMonth = data.month - 1;

    if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    onMonthChange(newYear, newMonth);
  };

  const handleNextMonth = () => {
    let newYear = data.year;
    let newMonth = data.month + 1;

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    }

    onMonthChange(newYear, newMonth);
  };

  return (
    <div className={styles.calendarContainer}>
      <CalendarHeader
        year={data.year}
        month={data.month}
        filters={data.filters}
        onPreviousMonth={handlePreviousMonth}
        onNextMonth={handleNextMonth}
        onFilterToggle={onFilterToggle}
      />
      <CalendarGrid
        days={data.days}
        filters={data.filters}
        onDateSelect={onDateSelect}
        year={data.year}
        month={data.month}
      />
    </div>
  );
};
