import { useState } from 'react';

import { PlayerReceivedCard } from '@/components';
import { Table, type TableColumnsDefinition } from '@/components/Table';
import type {
  PlayerStat,
  TeamData,
} from '@/routes/teams/$teamId/matches/-temp-server-types';

import * as styles from './MatchParticipatedPlayerList.css';

export interface MatchParticipatedPlayerListProps {
  players: PlayerStat[];
  homeTeam: TeamData;
  awayTeam: TeamData;
}

// TODO: 기존 리스트들도 어떻게 공통화할지 고민
export const MatchParticipatedPlayerList = ({
  players,
  homeTeam,
  awayTeam,
}: MatchParticipatedPlayerListProps) => {
  const [selectedTeam, setSelectedTeam] = useState<'home' | 'away'>('home');

  const selectTeam = (team: 'home' | 'away') => {
    setSelectedTeam(team);
  };

  const columns = {
    name: {
      key: 'name',
      title: '',
      width: 200,
      headerAlign: 'left',
      bodyAlign: 'left',
      renderHeader: () => (
        <div className={styles.headerIcons}>
          <div
            className={styles.iconContainer}
            style={{
              borderColor:
                selectedTeam === 'home' ? homeTeam.teamColor : 'transparent',
            }}
          >
            <button
              className={styles.teamIconButton}
              onClick={() => selectTeam('home')}
            >
              <img
                src='https://matchday2025.s3.ap-northeast-2.amazonaws.com/images/default-team-logo.svg'
                className={styles.teamIcon}
                alt=''
              />
            </button>
          </div>
          <div
            className={styles.iconContainer}
            style={{
              borderColor:
                selectedTeam === 'away' ? awayTeam.teamColor : 'transparent',
            }}
          >
            <button
              className={styles.teamIconButton}
              onClick={() => selectTeam('away')}
            >
              <img
                src='https://matchday2025.s3.ap-northeast-2.amazonaws.com/images/default-team-logo.svg'
                className={styles.teamIcon}
                alt=''
              />
            </button>
          </div>
        </div>
      ),
      render: (_, player) => (
        <>
          <img
            src='https://matchday2025.s3.ap-northeast-2.amazonaws.com/images/default-user-profile-image.png'
            className={styles.playerAvatar}
            alt={`${player.name} 프로필`}
          />
          <div className={styles.playerDetails}>
            <span className={styles.playerNumber}>{player.number}</span>
            <span className={styles.playerName}>{player.name}</span>
            <div className={styles.playerPosition}>{player.position}</div>
          </div>
        </>
      ),
    },
    goals: {
      key: 'goals',
      title: '득점',
      width: 20,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: goals => <span className={styles.statValue}>{goals}</span>,
    },
    assists: {
      key: 'assists',
      title: '어시스트',
      width: 40,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: () => <span className={styles.statValue}>-</span>,
    },
    yellowCards: {
      key: 'yellowCards',
      title: '경고',
      width: 30,
      headerAlign: 'center',
      bodyAlign: 'center',
      render: (_, player) => (
        <PlayerReceivedCard
          yellowCards={player.yellowCards}
          redCards={player.redCards}
        />
      ),
    },
  } satisfies TableColumnsDefinition<PlayerStat>;

  return (
    <div className={styles.container}>
      <Table
        columns={columns}
        data={players}
        headerHeight={60}
        rowHeight={40}
        className={styles.tableOverride}
        headerClassName={styles.headerOverride}
        headerRowClassName={styles.headerRow}
      />
    </div>
  );
};
