import { ApiResponse, http } from '@/apis/http';
import { S3PresignedResponse } from '@/apis/models';

export const putFileToS3 = async (
  presignedUrl: string,
  file: File,
): Promise<ApiResponse<S3PresignedResponse>> => {
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

  return response.json() as Promise<ApiResponse<S3PresignedResponse>>;
};
