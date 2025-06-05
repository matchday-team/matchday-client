import { awsApi, teamApi } from '@/apis/fetchers';
import { MAX_IMAGE_FILE_SIZE } from '@/constants';

export interface TeamImageUploadResult {
  imageKey: string;
  imageUrl: string;
}

export interface TeamImageUploadOptions {
  onSuccess?: (result: TeamImageUploadResult) => void;
  onError?: (error: Error) => void;
}

const getFileExtension = (fileName: string): string => {
  return fileName.split('.').pop()?.toLowerCase() || 'jpg';
};

// NOTE: 현재 팀 프로필 이미지를 등록할 수 있는 방법이 없어 코드만 존재
/**
@usage
  await uploadTeamImage(teamId, data.teamImg, {
    onSuccess: () =>
      enqueueSnackbar('팀 이미지 업로드 성공', { variant: 'success' }),
    onError: () =>
      enqueueSnackbar('팀 이미지 업로드 실패', { variant: 'error' }),
  });
*/
export async function uploadTeamImage(
  teamId: number,
  file: File,
  options?: TeamImageUploadOptions,
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
    const errorMessage =
      error instanceof Error ? error.message : '이미지 업로드에 실패했습니다.';

    console.error('이미지 업로드 실패:', error);

    options?.onError?.(
      error instanceof Error ? error : new Error(errorMessage),
    );
    throw error;
  }
}
