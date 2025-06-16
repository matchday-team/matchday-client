export interface NoticeCreateRequest {
  title: string;
  content: string;
  isImportant: boolean;
}

export interface NoticeCreateResponse {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
  isPinned: boolean;
}

export interface FileUpload {
  id: string;
  file: File;
  name: string;
  size: number;
  type: string;
  uploadProgress: number;
  uploadUrl?: string;
}
