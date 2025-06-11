import { assignInlineVars } from '@vanilla-extract/dynamic';

import {
  ChevronRightIcon,
  CrownIcon,
  JerseyIcon,
  LoaderIcon,
  MapIcon,
  ShortsIcon,
  UsersIcon,
} from '@/assets/icons';
import DefaultTeamLogo from '@/assets/images/teams/default-team-logo.svg?react';
import type { TeamInfo } from '@/routes/teams/$teamId/index/-temp-server-types';

import * as styles from './TeamHeader.css';

interface TeamHeaderProps {
  teamInfo: TeamInfo;
}

export const TeamHeader = ({ teamInfo }: TeamHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.teamInfoSection}>
          <div className={styles.logoContainer}>
            {teamInfo.logoUrl ? (
              <img src={teamInfo.logoUrl} alt='' className={styles.logoImage} />
            ) : (
              <DefaultTeamLogo
                className={styles.logoImage}
                style={{
                  color: teamInfo.uniformColors.top,
                }}
              />
            )}
          </div>
          <div className={styles.teamDetails}>
            <div className={styles.teamDetailsInner}>
              <div>
                <h1 className={styles.teamName}>{teamInfo.name}</h1>
                <p className={styles.teamDescription}>{teamInfo.description}</p>
              </div>
              <div className={styles.editSection}>
                <span className={styles.editText}>수정하기</span>
                <ChevronRightIcon className={styles.chevronIcon} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statHeader}>
              <CrownIcon className={styles.statIcon} />
              <span className={styles.statLabel}>대표자</span>
            </div>
            <span className={styles.statValue}>{teamInfo.leader}</span>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statHeader}>
              <LoaderIcon className={styles.statIcon} />
              <span className={styles.statLabel}>창단연도</span>
            </div>
            <span className={styles.statValue}>{teamInfo.foundedYear}</span>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statHeader}>
              <MapIcon className={styles.statIcon} />
              <span className={styles.statLabel}>활동 지역</span>
            </div>
            <span className={styles.statValue}>{teamInfo.region}</span>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statHeader}>
              <UsersIcon className={styles.statIcon} />
              <span className={styles.statLabel}>활동 회원 수</span>
            </div>
            <span className={styles.statValue}>{teamInfo.memberCount}명</span>
          </div>
          <div className={styles.uniformSection}>
            <span className={styles.uniformLabel}>유니폼</span>
            <div className={styles.uniformContainer}>
              <div className={styles.uniformIcon}>
                <JerseyIcon
                  className={styles.jerseyIcon}
                  style={{
                    fill: teamInfo.uniformColors.top,
                  }}
                />
                <ShortsIcon
                  className={styles.shortsIcon}
                  style={{
                    fill: teamInfo.uniformColors.bottom,
                  }}
                />
                <div
                  className={styles.socksContainer}
                  style={assignInlineVars({
                    [styles.sockColorVar]: teamInfo.uniformColors.socks,
                  })}
                >
                  <div className={styles.sock} />
                  <div className={styles.sock} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
