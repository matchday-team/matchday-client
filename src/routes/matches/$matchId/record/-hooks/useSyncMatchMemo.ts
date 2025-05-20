import { useCallback, useEffect, useState } from 'react';

import { useSuspenseQuery } from '@tanstack/react-query';

import { useCreateOrUpdateMatchMemoMutation } from '@/apis/mutations';
import { matchRecordQuery } from '@/apis/queries';
import { debounce } from '@/utils/debounce';

export const useSyncMatchMemo = (matchId: number) => {
  const { data: matchMemo } = useSuspenseQuery(
    matchRecordQuery.memoQuery(matchId),
  );

  const { mutateAsync: updateMatchMemo } =
    useCreateOrUpdateMatchMemoMutation(matchId);

  const [memo, setMemo] = useState(matchMemo.data.memo ?? ''); // NOTE: 기본 값이 `null`이어서 빈 문자열로 초기화 필요
  const debouncedUpdateMemo = useCallback(debounce(updateMatchMemo, 500), [
    updateMatchMemo,
  ]);
  const updateMemo = (newMemo: string) => {
    setMemo(newMemo);
    debouncedUpdateMemo(newMemo);
  };
  useEffect(() => {
    setMemo(matchMemo.data.memo ?? '');
  }, [matchMemo]);

  return {
    memo,
    updateMemo,
  };
};
