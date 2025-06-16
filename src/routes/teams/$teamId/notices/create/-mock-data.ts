import type { NoticeCreateRequest } from './-temp-server-types';

export const mockNoticeCreateRequest: NoticeCreateRequest = {
  title: '훈련 일정 변경 안내',
  content: '이번 주 화요일 훈련이 우천으로 인해 수요일로 연기됩니다.',
  isImportant: false,
};

export const mockCreateNoticeResponse = {
  id: 1,
  title: '훈련 일정 변경 안내',
  content: '이번 주 화요일 훈련이 우천으로 인해 수요일로 연기됩니다.',
  author: '김팀장',
  createdAt: '2024-01-15T10:30:00Z',
  isPinned: false,
};
