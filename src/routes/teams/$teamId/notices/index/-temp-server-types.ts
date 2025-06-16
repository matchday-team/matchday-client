export interface Notice {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  isPinned?: boolean;
}

export interface NoticeFilters {
  search: string;
  sortOrder: '최신순' | '오래된순';
}
