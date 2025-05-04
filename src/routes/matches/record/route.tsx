import { useState } from 'react';

import { createFileRoute } from '@tanstack/react-router';

import { StartingPlayer } from '@/apis';
import { Team } from '@/apis';
import {
  GameScoreArea,
  MatchLogList,
  MatchRecordSimpleMemo,
  MatchSchedule,
  MatchTimeController,
  PlayerStatCounterGrid,
  SubstitutionPlayerList,
  TeamStatCompareCounterList,
  TeamStatCounterGrid,
  ToggleableStartingPlayers,
} from '@/components';
import {
  getTimeAgo,
  getUnixTimestampInSeconds,
} from '@/components/MatchTimeController/timeUtils';
import { dummyTeam1, dummyTeam2 } from '@/mocks';
import { commonPaper } from '@/styles/paper.css';
import { lightThemeVars } from '@/styles/theme.css';

import { MatchRecordLayout } from './-components';

export const Route = createFileRoute('/matches/record')({
  component: MatchRecordPage,
});

const mockHomeTeam: Team = {
  id: 1,
  name: 'FC 서울',
  teamColor: lightThemeVars.color.soccer.red,
  logoImageUrl: 'https://example.com/logo1.png',
};

const mockAwayTeam: Team = {
  id: 2,
  name: '수원 삼성',
  teamColor: '#003A70',
  logoImageUrl: 'https://example.com/logo2.png',
};

const mockHomePlayer: StartingPlayer = {
  id: 1,
  name: '홍길동',
  number: 10,
  position: 'FW',
  profileImageUrl: 'https://example.com/profile1.png',
  goals: 10,
  assists: 10,
  fouls: 10,
  yellowCards: 0,
  redCards: 0,
};

const mockAwayPlayer: StartingPlayer = {
  id: 2,
  name: '이순신',
  number: 10,
  position: 'FW',
  profileImageUrl: 'https://example.com/profile2.png',
  goals: 10,
  assists: 10,
  fouls: 10,
  yellowCards: 0,
  redCards: 0,
};

const mockLogs = Array.from({ length: 10 }, (_, index) => [
  {
    id: index * 3 + 1,
    time: new Date('2024-01-01'),
    team: mockHomeTeam,
    player: mockHomePlayer,
    action: '유효 슈팅',
  },
  {
    id: index * 3 + 2,
    time: new Date('2024-01-01'),
    team: mockAwayTeam,
    player: mockAwayPlayer,
    action: '골',
  },
  {
    id: index * 3 + 3,
    time: new Date('2024-01-01'),
    team: mockHomeTeam,
    player: mockHomePlayer,
    action: '골',
  },
]).flat();

const statFields = [
  '슈팅',
  '유효 슈팅',
  '코너킥',
  '오프사이드',
  '파울',
  '경고',
];

// TO DO: 예시용 스타일로, 추후 제거 필요
const s = (height: number | string) => ({
  height,
  backgroundColor: '#fff',
  borderRadius: 10,
});

function MatchRecordPage() {
  const now = getUnixTimestampInSeconds();
  const [memo, setMemo] = useState('');

  return (
    <MatchRecordLayout
      team1Color={dummyTeam1.teamColor}
      team2Color={dummyTeam2.teamColor}
      team1={
        <div
          className={commonPaper}
          style={{
            ...s('auto'),
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ToggleableStartingPlayers teamType='home' />
          <div
            style={{
              padding: '24px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <SubstitutionPlayerList teamType='home' />
            <TeamStatCounterGrid
              stats={statFields.map(title => ({
                title,
                value: Math.floor(Math.random() * 30),
              }))}
            />
          </div>
        </div>
      }
      team2={
        <div
          className={commonPaper}
          style={{
            ...s('auto'),
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ToggleableStartingPlayers teamType='away' />
          <div
            style={{
              padding: '24px 8px',
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
            }}
          >
            <SubstitutionPlayerList teamType='away' />
            <TeamStatCounterGrid
              stats={statFields.map(title => ({
                title,
                value: Math.floor(Math.random() * 30),
              }))}
            />
          </div>
        </div>
      }
      teamStats={
        <div className={commonPaper} style={s(560)}>
          <GameScoreArea
            scores={{
              home: 0,
              away: 0,
            }}
            homeTeam={dummyTeam1}
            awayTeam={dummyTeam2}
          />
          <TeamStatCompareCounterList
            homeTeamStat={{
              슈팅: 30,
              '유효 슈팅': 25,
              '코너 킥': 15,
              '오프 사이드': 8,
              파울: 20,
              경고: 5,
            }}
            awayTeamStat={{
              슈팅: 20,
              '유효 슈팅': 10,
              '코너 킥': 12,
              '오프 사이드': 6,
              파울: 15,
              경고: 4,
            }}
            maxValue={30}
          />
        </div>
      }
      selectedPlayer={
        <div style={s(302)}>
          <PlayerStatCounterGrid />
        </div>
      }
      timer={
        <div style={s(116)}>
          <MatchTimeController
            now={now}
            matchStatus={{
              currentPeriod: 1,
              state: 'playing',
              startedAt: getTimeAgo({ minutes: 50, seconds: 0, now }),
              addedTime: 5,
            }}
            periodNames={['전반', '후반']}
          />
        </div>
      }
      info={
        <div style={s(284)}>
          <MatchSchedule
            items={[
              { label: '장소', value: '한양대학교 대운동장' },
              { label: '날짜', value: '2025-04-16 (수)' },
              { label: '시간', value: '09 : 30 ~ 11 : 30' },
              { label: '주심', value: '김태인' },
              { label: '부심1', value: '김주용' },
              { label: '부심2', value: '주유나' },
              { label: '대기심', value: '김성빈' },
            ]}
          />
        </div>
      }
      log={
        <div style={s(228)}>
          <MatchLogList
            teams={{
              home: dummyTeam1,
              away: dummyTeam2,
            }}
            logs={mockLogs}
          />
        </div>
      }
      memo={
        <div style={s(204)}>
          <MatchRecordSimpleMemo value={memo} onChange={setMemo} />
        </div>
      }
    />
  );
}
