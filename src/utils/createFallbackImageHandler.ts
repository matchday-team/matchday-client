import { SyntheticEvent } from 'react';

import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';

/**
 * 이미지 로드 실패 시 fallback 이미지를 설정하는 함수를 생성
 *
 * @returns <img>의 onError 이벤트 핸들러로 등록할 함수
 */
export const createFallbackImageHandler =
  (fallbackImageUrl: string = noProfilePlayerImage) =>
  (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImageUrl;
  };
