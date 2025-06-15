import { useCallback, useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { usePageTitle } from '@/hooks';
import type {
  CalendarData,
  ScheduleDetailData,
} from '@/routes/teams/$teamId/schedules/-temp-server-types';

import { ScheduleCalendar, ScheduleDetailPanel } from './-components';
import {
  DEFAULT_SELECTED_DATE,
  getMockCalendarData,
  getMockScheduleDetailData,
} from './-mock-data';
import * as styles from './-route.css';

export const Route = createFileRoute('/teams/$teamId/schedules')({
  component: SchedulesPage,
});

function SchedulesPage() {
  usePageTitle('일정 관리');

  const [selectedDate, setSelectedDate] = useState(DEFAULT_SELECTED_DATE);
  const [calendarData, setCalendarData] = useState<CalendarData>(() =>
    getMockCalendarData(selectedDate),
  );
  const [detailData, setDetailData] = useState<ScheduleDetailData>(() =>
    getMockScheduleDetailData(selectedDate),
  );

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setDetailData(getMockScheduleDetailData(date));
    setCalendarData(getMockCalendarData(date));
  };

  const handleMonthChange = (year: number, month: number) => {
    // 새로운 월의 첫 번째 날로 선택 날짜 변경
    const newSelectedDate = `${year}-${month.toString().padStart(2, '0')}-01`;
    setSelectedDate(newSelectedDate);
    setCalendarData(getMockCalendarData(newSelectedDate));
    setDetailData(getMockScheduleDetailData(newSelectedDate));
  };

  const handleFilterToggle = (category: string) => {
    setCalendarData(prevData => ({
      ...prevData,
      filters: prevData.filters.map(filter =>
        filter.category === category
          ? { ...filter, isActive: !filter.isActive }
          : filter,
      ),
    }));
  };

  const handleCreateSchedule = useCallback(() => {
    console.log('일정 생성:', selectedDate);
  }, [selectedDate]);

  const handleEditSchedule = useCallback((scheduleId: string) => {
    console.log('일정 수정:', scheduleId);
  }, []);

  return (
    <div className={styles.rootContainer}>
      <div className={styles.contentGrid}>
        <div className={styles.calendarColumn}>
          <ScheduleCalendar
            data={calendarData}
            onDateSelect={handleDateSelect}
            onMonthChange={handleMonthChange}
            onFilterToggle={handleFilterToggle}
          />
        </div>
        <div className={styles.detailColumn}>
          <ScheduleDetailPanel
            data={detailData}
            onCreateSchedule={handleCreateSchedule}
            onEditSchedule={handleEditSchedule}
          />
        </div>
      </div>
    </div>
  );
}
