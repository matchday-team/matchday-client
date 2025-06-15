import type {
  CalendarData,
  CalendarDay,
  Schedule,
  ScheduleDetailData,
  ScheduleFilter,
} from '@/routes/teams/$teamId/schedules/-temp-server-types';

const schedule1: Schedule[] = [
  {
    id: '1',
    title: '지역 리그 1차전',
    location: '잠실종합운동장',
    startTime: '오후 02:00',
    endTime: '오후 04:00',
    category: '대회/리그',
    date: '2025-02-10',
  },
];

const schedules10: Schedule[] = [
  {
    id: '2',
    title: '선수단 조회',
    location: '훈련장',
    startTime: '오전 06:00',
    endTime: '오전 06:30',
    category: '기타',
    date: '2025-02-11',
  },
  {
    id: '3',
    title: '체력 단련 훈련',
    location: '훈련장',
    startTime: '오전 07:00',
    endTime: '오전 08:30',
    category: '기타',
    date: '2025-02-11',
  },
  {
    id: '4',
    title: '2025 제1차 경기도 꿈나무 축구대회',
    location: '서울 성동구 왕십리로 22',
    startTime: '오전 09:00',
    endTime: '오전 11:00',
    category: '대회/리그',
    date: '2025-02-11',
  },
  {
    id: '5',
    title: '유소년팀 친선경기',
    location: '목동경기장',
    startTime: '오전 10:00',
    endTime: '오전 12:00',
    category: '친선 매치',
    date: '2025-02-11',
  },
  {
    id: '6',
    title: '점심 식사 및 휴식',
    location: '클럽하우스',
    startTime: '오후 12:00',
    endTime: '오후 01:00',
    category: '기타',
    date: '2025-02-11',
  },
  {
    id: '7',
    title: '강남FC vs 서초FC 친선경기',
    location: '강남구민체육센터',
    startTime: '오후 01:00',
    endTime: '오후 03:00',
    category: '친선 매치',
    date: '2025-02-11',
  },
  {
    id: '8',
    title: '경기 분석 회의',
    location: '회의실',
    startTime: '오후 03:30',
    endTime: '오후 04:30',
    category: '기타',
    date: '2025-02-11',
  },
  {
    id: '9',
    title: '부상 선수 재활 훈련',
    location: '재활센터',
    startTime: '오후 04:00',
    endTime: '오후 05:00',
    category: '기타',
    date: '2025-02-11',
  },
  {
    id: '10',
    title: '팀 미팅',
    location: '클럽하우스',
    startTime: '오후 05:00',
    endTime: '오후 06:00',
    category: '기타',
    date: '2025-02-11',
  },
  {
    id: '11',
    title: '장비 점검 및 정리',
    location: '장비실',
    startTime: '오후 06:30',
    endTime: '오후 07:00',
    category: '기타',
    date: '2025-02-11',
  },
];

// 모의 일정 데이터 (합쳐진 배열)
export const mockSchedules: Schedule[] = [...schedule1, ...schedules10];

// 2025년 2월 캘린더 생성 함수
function generateCalendarDays(selectedDate: string): CalendarDay[] {
  const days: CalendarDay[] = [];
  const currentDate = new Date();
  const today = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // 2025년 2월 기준
  const year = 2025;
  const month = 1; // 0-based (February)

  // 1월의 마지막 날들 (26, 27, 28, 29, 30, 31)
  const januaryDays = Array.from({ length: 6 }, (_, index) => ({
    date: 26 + index,
    isCurrentMonth: false,
    isToday: false,
    isSelected: false,
    schedules: [],
  }));
  days.push(...januaryDays);

  // 2월의 날들 (1-28)
  const februaryDays = Array.from({ length: 28 }, (_, index) => {
    const date = index + 1;
    const dateStr = `2025-02-${date.toString().padStart(2, '0')}`;
    const daySchedules = mockSchedules.filter(
      schedule => schedule.date === dateStr,
    );

    return {
      date,
      isCurrentMonth: true,
      isToday: year === currentYear && month === currentMonth && date === today,
      isSelected: dateStr === selectedDate,
      schedules: daySchedules,
    };
  });
  days.push(...februaryDays);

  // 3월의 첫 날들 (1-8)
  const marchDays = Array.from({ length: 8 }, (_, index) => ({
    date: index + 1,
    isCurrentMonth: false,
    isToday: false,
    isSelected: false,
    schedules: [],
  }));
  days.push(...marchDays);

  return days;
}

// 필터 데이터 생성
function generateFilters(): ScheduleFilter[] {
  const filters: ScheduleFilter[] = [
    { category: '대회/리그', count: 0, isActive: true },
    { category: '친선 매치', count: 0, isActive: true },
    { category: '기타', count: 0, isActive: true },
  ];

  // 각 카테고리별 일정 개수 계산
  mockSchedules.forEach(schedule => {
    const filter = filters.find(f => f.category === schedule.category);
    if (filter) {
      filter.count += 1;
    }
  });

  return filters;
}

// 캘린더 데이터 생성
export function getMockCalendarData(selectedDate: string): CalendarData {
  return {
    year: 2025,
    month: 2, // February
    days: generateCalendarDays(selectedDate),
    filters: generateFilters(),
  };
}

// 선택된 날짜의 세부 데이터 생성
export function getMockScheduleDetailData(
  selectedDate: string,
): ScheduleDetailData {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(selectedDate);
  const dayOfWeek = dayNames[date.getDay()];

  const schedules = mockSchedules.filter(
    schedule => schedule.date === selectedDate,
  );

  return {
    selectedDate,
    dayOfWeek,
    schedules,
  };
}

// 초기 선택 날짜
export const DEFAULT_SELECTED_DATE = '2025-02-11';
