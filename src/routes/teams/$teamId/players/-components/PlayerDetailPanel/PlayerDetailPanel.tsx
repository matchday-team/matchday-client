import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { PositionTag } from '@/routes/teams/$teamId/players/-components';
import type {
  MatchRecord,
  Member,
} from '@/routes/teams/$teamId/players/-temp-server-types';
import { createFallbackImageHandler } from '@/utils';

import * as styles from './PlayerDetailPanel.css';

const fallbackImageHandler = createFallbackImageHandler();

export interface PlayerDetailPanelProps {
  member: Member;
  matchRecords: MatchRecord[];
  personalInfo: {
    birthDate: string;
    height: string;
    weight: string;
  };
  secondaryPosition: string;
}

export function PlayerDetailPanel({
  member,
  matchRecords,
  personalInfo,
  secondaryPosition,
}: PlayerDetailPanelProps) {
  return (
    <div className={styles.rootContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.profileSection}>
          <div className={styles.playerHeader}>
            <img
              src={member.profileImage ?? noProfilePlayerImage}
              onError={fallbackImageHandler}
              className={styles.playerAvatar}
              alt=''
            />
            <div className={styles.playerInfo}>
              <div className={styles.playerName}>{member.name}</div>
            </div>
          </div>
          <div className={styles.positionSection}>
            <div className={styles.positionColumn}>
              <div className={styles.positionLabel}>주 포지션</div>
              <PositionTag position={member.position} />
            </div>
            <div className={styles.divider} />
            <div className={styles.positionColumn}>
              <div className={styles.positionLabel}>부 포지션</div>
              <div className={styles.secondaryPositionTag}>
                <div className={styles.secondaryPositionText}>
                  {secondaryPosition}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.personalInfoSection}>
          <div className={styles.personalInfoLabels}>
            <div className={styles.infoLabel}>생년월일</div>
            <div className={styles.infoLabel}>주발</div>
            <div className={styles.infoLabel}>키</div>
            <div className={styles.infoLabel}>몸무게</div>
          </div>
          <div className={styles.personalInfoValues}>
            <div className={styles.infoValue}>{personalInfo.birthDate}</div>
            <div className={styles.infoValue}>{member.foot}</div>
            <div className={styles.infoValue}>{personalInfo.height}</div>
            <div className={styles.infoValue}>{personalInfo.weight}</div>
          </div>
        </div>
      </div>
      <div className={styles.matchRecordsSection}>
        <div className={styles.matchTableHeader}>
          <div className={styles.headerLabelsRow}>
            <div className={styles.opponentLabel}>상대팀</div>
            <div className={styles.statsLabels}>
              <div className={styles.scoreLabel}>스코어</div>
              <div className={styles.personalStatsLabels}>
                <div className={styles.statsLabel}>득점</div>
                <div className={styles.statsLabel}>어시스트</div>
                <div className={styles.statsLabel}>경고</div>
              </div>
            </div>
          </div>
        </div>
        {/* TODO: Table로 변경하기 */}
        <div className={styles.matchTableBody}>
          {matchRecords.map(record => (
            <div key={record.id} className={styles.matchRow}>
              <img
                src={record.opponentLogo}
                className={styles.teamLogo}
                alt=''
              />
              <div className={styles.matchInfo}>
                <div className={styles.matchMainInfo}>
                  <div className={styles.teamName}>{record.opponentTeam}</div>
                  <div
                    className={`${styles.scoreDisplay} ${record.isWin ? styles.scoreWin : styles.scoreLoss}`}
                  >
                    <div className={styles.scoreNumber({ team: 'home' })}>
                      {record.homeScore}
                    </div>
                    <div className={styles.scoreColon}>:</div>
                    <div className={styles.scoreNumberWrapper}>
                      <div className={styles.scoreNumber({ team: 'away' })}>
                        {record.awayScore}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.playerStats}>
                  <div className={styles.statValue}>{record.goals}</div>
                  <div className={styles.statValue}>-</div>
                  <div className={styles.cardDisplay}>
                    <div className={styles.cardPlaceholder} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
