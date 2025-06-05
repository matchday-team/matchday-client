import { awsApi, teamApi } from '@/apis/fetchers';
import { MAX_IMAGE_FILE_SIZE } from '@/constants';

export interface TeamImageUploadResult {
  imageKey: string;
  imageUrl: string;
}

const getFileExtension = (fileName: string): string => {
  return fileName.split('.').pop()?.toLowerCase() || 'jpg';
};

// NOTE: 현재 팀 프로필 이미지를 등록할 수 있는 방법이 없어 코드만 존재
export async function uploadTeamProfileImage(
  teamId: number,
  file: File,
): Promise<void> {
  if (!file.type.startsWith('image/')) {
    throw new Error('이미지 파일만 업로드 가능합니다.');
  }

  if (file.size > MAX_IMAGE_FILE_SIZE) {
    throw new Error('파일 크기는 10MB 이하여야 합니다.');
  }

  try {
    const extension = getFileExtension(file.name);
    const uploadUrlResponse = await teamApi.getTeamProfileImageUploadUrl(
      teamId,
      { extension },
    );
    const presignedUrl = uploadUrlResponse.data.url;

    await awsApi.putFileToS3(presignedUrl, file);
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    throw error;
  }
}
