import { useEffect, useRef, useState } from 'react';

/**
 * Drag-Drop 시 dragOver 여부를 반환하는 hook
 * - 드래그 드롭 구현 시 자식 요소에 대해서도 dragEnter/Leave 이벤트가 발생해서 쉽게 구현할 수 없음.
 * - 모든 요소에 Enter/Leave가 발생하므로, 카운터를 두어서 부모를 빠져나가기 전까지 카운터 >=1 인 상황을 유지시켜서 dragOver 여부를 결정
 */
export const useIsDragOver = <Target extends HTMLElement>() => {
  const [isDragOver, setIsDragOver] = useState(false);
  const ref = useRef<number>(0);
  const hoverTargetRef = useRef<Target>(null);

  const handleDragEnter = () => {
    ref.current += 1;
    if (ref.current === 1) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = () => {
    ref.current -= 1;
    if (ref.current === 0) {
      setIsDragOver(false);
    }
  };

  const handleDrop = () => {
    ref.current = 0;
    setIsDragOver(false);
  };

  useEffect(() => {
    hoverTargetRef.current?.addEventListener('dragenter', handleDragEnter);
    hoverTargetRef.current?.addEventListener('dragleave', handleDragLeave);
    hoverTargetRef.current?.addEventListener('drop', handleDrop);

    return () => {
      hoverTargetRef.current?.removeEventListener('dragenter', handleDragEnter);
      hoverTargetRef.current?.removeEventListener('dragleave', handleDragLeave);
      hoverTargetRef.current?.removeEventListener('drop', handleDrop);
    };
  }, []);

  return {
    isDragOver,
    hoverTargetRef,
  };
};
