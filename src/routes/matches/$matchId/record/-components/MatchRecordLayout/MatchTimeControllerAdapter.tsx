import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

import {
  MatchHalfTimeRequestHalfType,
  MatchHalfTimeRequestTimeType,
  MatchInfoResponse,
} from '@/apis/models';
import {
  useCancelMatchStartMutation,
  usePatchMatchTimerMutation,
} from '@/apis/mutations';
import { matchQuery } from '@/apis/queries';
import { MatchTimeController } from '@/components';
import { useIntervalRerender } from '@/hooks';
import { timeUtils } from '@/utils';

// 전/후반 종료 시점은 각각 45분, 90분으로 설정한다.
const calcMatchStatus = (matchInfo: MatchInfoResponse) => {
  if (!matchInfo.firstHalfStartTime) {
    return {
      period: 'not-started',
      startedAt: timeUtils.getTodaySeconds(),
    } as const;
  }

  if (!matchInfo.firstHalfEndTime) {
    return {
      period: 'first',
      startedAt: timeUtils.getTodaySeconds(matchInfo.firstHalfStartTime),
    } as const;
  }

  if (!matchInfo.secondHalfStartTime) {
    return {
      period: 'half-time',
      startedAt: timeUtils.getTodaySeconds() - matchInfo.firstHalfPeriod * 60,
    } as const;
  }

  if (!matchInfo.secondHalfEndTime) {
    return {
      period: 'second',
      startedAt:
        timeUtils.getTodaySeconds(matchInfo.secondHalfStartTime) -
        matchInfo.secondHalfPeriod * 60,
    } as const;
  }

  return {
    period: 'end',
    startedAt:
      timeUtils.getTodaySeconds() -
      (matchInfo.firstHalfPeriod + matchInfo.secondHalfPeriod) * 60,
  } as const;
};

// API 연동 컴포넌트 - Storybook에서는 미사용
export const MatchTimeControllerAdapter = ({
  matchId,
}: {
  matchId: number;
}) => {
  const queryClient = useQueryClient();
  const { data: matchInfo } = useSuspenseQuery(matchQuery.info(matchId));

  const { period, startedAt } = calcMatchStatus(matchInfo.data);
  const isGamePlaying = period === 'first' || period === 'second';

  useIntervalRerender(isGamePlaying);

  const { mutateAsync: patchMatchTimer } = usePatchMatchTimerMutation(matchId);
  const { mutateAsync: cancelMatchStart } =
    useCancelMatchStartMutation(matchId);

  const startMatchTimer = () => {
    patchMatchTimer({
      halfType:
        period === 'not-started'
          ? MatchHalfTimeRequestHalfType.FIRST_HALF
          : MatchHalfTimeRequestHalfType.SECOND_HALF,
      timeType: MatchHalfTimeRequestTimeType.START_TIME,
      time: timeUtils.getHHMMSSofDate(),
    });
  };

  const stopMatchTimer = () => {
    patchMatchTimer({
      halfType:
        period === 'first'
          ? MatchHalfTimeRequestHalfType.FIRST_HALF
          : MatchHalfTimeRequestHalfType.SECOND_HALF,
      timeType: MatchHalfTimeRequestTimeType.END_TIME,
      time: timeUtils.getHHMMSSofDate(),
    });
  };

  return (
    <MatchTimeController
      timerText={timeUtils.formatMMSSfromSeconds(
        timeUtils.getTodaySeconds() - startedAt,
      )}
      currentPeriod={period}
      isPlaying={isGamePlaying}
      addedTime={0} // FIXME: 현재는 추가 시간 기능이 없음 (메모 사용 권장)
      onStart={() => {
        startMatchTimer();
      }}
      onStop={() => {
        stopMatchTimer();
      }}
      onReset={async () => {
        await cancelMatchStart();
        await queryClient.invalidateQueries({
          queryKey: matchQuery.rangeQueryKeys.byId(matchId),
        });
      }}
    />
  );
};
