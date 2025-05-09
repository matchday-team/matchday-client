import { useSuspenseQuery } from '@tanstack/react-query';

import { MatchInfoResponse } from '@/apis/models';
import {
  useCancelMatchStartMutation,
  usePatchMatchTimerMutation,
} from '@/apis/mutations';
import { matchRecordQuery } from '@/apis/queries';
import { MatchTimeController } from '@/components';
import { useForceRerender } from '@/hooks';
import {
  formatMMSSfromSeconds,
  getHHMMSSofDate,
  getTodaySeconds,
} from '@/utils';

const MIN_45_IN_SECONDS = 45 * 60;
const MIN_90_IN_SECONDS = 90 * 60;

// 전/후반 종료 시점은 각각 45분, 90분으로 설정한다.
const calcMatchStatus = (matchInfo: MatchInfoResponse) => {
  if (!matchInfo.firstHalfStartTime) {
    return {
      period: 'not-started',
      startedAt: getTodaySeconds(),
    } as const;
  }

  if (!matchInfo.firstHalfEndTime) {
    return {
      period: 'first',
      startedAt: getTodaySeconds(matchInfo.firstHalfStartTime),
    } as const;
  }

  if (!matchInfo.secondHalfStartTime) {
    return {
      period: 'half-time',
      startedAt: getTodaySeconds() - MIN_45_IN_SECONDS,
    } as const;
  }

  if (!matchInfo.secondHalfEndTime) {
    return {
      period: 'second',
      startedAt:
        getTodaySeconds(matchInfo.secondHalfStartTime) - MIN_45_IN_SECONDS,
    } as const;
  }

  return {
    period: 'end',
    startedAt: getTodaySeconds() - MIN_90_IN_SECONDS,
  } as const;
};

// API 연동 컴포넌트 - Storybook에서는 미사용
export const MatchTimeControllerAdapter = ({
  matchId,
}: {
  matchId: number;
}) => {
  const { data: matchInfo } = useSuspenseQuery(
    matchRecordQuery.infoQuery(matchId),
  );

  const { period, startedAt } = calcMatchStatus(matchInfo.data);
  const isGamePlaying = period === 'first' || period === 'second';

  useForceRerender(isGamePlaying);

  const { mutateAsync: patchMatchTimer } = usePatchMatchTimerMutation(matchId);
  const { mutateAsync: cancelMatchStart } =
    useCancelMatchStartMutation(matchId);

  const startMatchTimer = () => {
    patchMatchTimer({
      halfType: period === 'not-started' ? 'first' : 'second',
      isStart: true,
      time: getHHMMSSofDate(),
    });
  };

  const stopMatchTimer = () => {
    patchMatchTimer({
      halfType: period === 'first' ? 'first' : 'second',
      isStart: false,
      time: getHHMMSSofDate(),
    });
  };

  return (
    <MatchTimeController
      timerText={formatMMSSfromSeconds(getTodaySeconds() - startedAt)}
      currentPeriod={period}
      isPlaying={isGamePlaying}
      addedTime={0} // FIXME: 현재는 추가 시간 기능이 없음 (메모 사용 권장)
      onStart={() => {
        startMatchTimer();
      }}
      onStop={() => {
        stopMatchTimer();
      }}
      onReset={() => {
        cancelMatchStart();
      }}
    />
  );
};
