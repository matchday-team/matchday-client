import * as styles from './ScheduleCalendar.css';

// 커스텀 아이콘 컴포넌트들
const ChevronLeftIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      d='M15 18L9 12L15 6'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      d='M9 18L15 12L9 6'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

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

export const ScheduleCalendar = () => {
  const currentMonth = '2025-04';
  const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  // 2025년 4월 캘린더 데이터
  const calendarDays = [
    // 이전 달 날짜들 (3월 31일)
    { day: 29, isCurrentMonth: false },
    { day: 30, isCurrentMonth: false },
    { day: 31, isCurrentMonth: false },
    // 현재 달 날짜들
    { day: 1, isCurrentMonth: true },
    { day: 2, isCurrentMonth: true },
    { day: 3, isCurrentMonth: true },
    { day: 4, isCurrentMonth: true, hasEvent: true },
    { day: 5, isCurrentMonth: true },
    { day: 6, isCurrentMonth: true },
    { day: 7, isCurrentMonth: true },
    { day: 8, isCurrentMonth: true },
    { day: 9, isCurrentMonth: true },
    { day: 10, isCurrentMonth: true },
    { day: 11, isCurrentMonth: true },
    { day: 12, isCurrentMonth: true },
    { day: 13, isCurrentMonth: true, hasEvent: true },
    { day: 14, isCurrentMonth: true },
    { day: 15, isCurrentMonth: true },
    { day: 16, isCurrentMonth: true },
    { day: 17, isCurrentMonth: true, isSelected: true, hasEvent: true },
    { day: 18, isCurrentMonth: true },
    { day: 19, isCurrentMonth: true },
    { day: 20, isCurrentMonth: true, hasEvent: true },
    { day: 21, isCurrentMonth: true },
    { day: 22, isCurrentMonth: true, hasEvent: true },
    { day: 23, isCurrentMonth: true },
    { day: 24, isCurrentMonth: true },
    { day: 25, isCurrentMonth: true },
    { day: 26, isCurrentMonth: true },
    { day: 27, isCurrentMonth: true },
    { day: 28, isCurrentMonth: true },
    { day: 29, isCurrentMonth: true },
    { day: 30, isCurrentMonth: true },
    // 다음 달 날짜들 (5월 1-3일)
    { day: 1, isCurrentMonth: false },
    { day: 2, isCurrentMonth: false },
    { day: 3, isCurrentMonth: false },
  ];

  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <div className={styles.header}>
        <h2 className={styles.title}>일정</h2>
        <div className={styles.moreSection}>
          <span className={styles.moreText}>자세히 보기</span>
          <ChevronRightIcon />
        </div>
      </div>

      {/* 캘린더 */}
      <div className={styles.calendarContainer}>
        {/* 월 네비게이션 */}
        <div className={styles.monthNavigation}>
          <ChevronLeftIcon />
          <span className={styles.monthText}>{currentMonth}</span>
          <ChevronRightIcon />
        </div>

        {/* 캘린더 그리드 */}
        <div className={styles.calendarGrid}>
          {/* 요일 헤더 */}
          <div className={styles.weekHeader}>
            {daysOfWeek.map(day => (
              <div key={day} className={styles.weekDayContainer}>
                <span className={styles.weekDayText}>{day}</span>
              </div>
            ))}
          </div>

          {/* 캘린더 날짜들 */}
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
