// 일정관리 페이지에서 사용되는 임시 서버 타입 정의

export type ScheduleCategory = '대회/리그' | '친선 매치' | '기타';

export interface Schedule {
  id: string;
  title: string;
  location: string;
  startTime: string; // 시간 문자열 (예: "오전 09:00")
  endTime: string; // 시간 문자열 (예: "오후 06:00")
  category: ScheduleCategory;
  date: string; // YYYY-MM-DD 형식
}

export interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  schedules: Schedule[];
}

export interface ScheduleFilter {
  category: ScheduleCategory;
  count: number;
  isActive: boolean;
}

export interface CalendarData {
  year: number;
  month: number;
  days: CalendarDay[];
  filters: ScheduleFilter[];
}

export interface ScheduleDetailData {
  selectedDate: string; // YYYY-MM-DD 형식
  dayOfWeek: string; // 요일 (예: "화")
  schedules: Schedule[];
}
