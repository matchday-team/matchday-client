import { CrownIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { PositionTag } from '@/routes/teams/$teamId/players/-components';
import type { Member } from '@/routes/teams/$teamId/players/-temp-server-types';
import { createFallbackImageHandler } from '@/utils';

import * as styles from './PlayerProfile.css';

const fallbackImageHandler = createFallbackImageHandler();

export interface PlayerProfileProps {
  member: Member;
}

export function PlayerProfile({ member }: PlayerProfileProps) {
  return (
    <div className={styles.rootContainer}>
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
            {member.role === '관리자' && (
              <CrownIcon className={styles.crownIcon} />
            )}
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
            <PositionTag position={member.secondaryPosition} />
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
          <div className={styles.infoValue}>{member.birthDate}</div>
          <div className={styles.infoValue}>{member.foot}</div>
          <div className={styles.infoValue}>{member.height}</div>
          <div className={styles.infoValue}>{member.weight}</div>
        </div>
      </div>
    </div>
  );
}
