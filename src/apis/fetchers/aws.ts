import { http } from '@/apis/http';

export const putFileToS3 = async (presignedUrl: string, file: File) => {
  const response = await http(presignedUrl, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': file.type,
    },
  });

  if (!response.ok) {
    throw new Error('이미지 업로드에 실패했습니다.');
  }
};
