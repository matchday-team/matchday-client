import {
  ArrowRightIcon,
  CrownIcon,
  LoaderIcon,
  MapIcon,
  UsersIcon,
} from '@/assets/icons';

import * as styles from './TeamHeader.css';

interface TeamInfo {
  name: string;
  description: string;
  logoUrl: string;
  leader: string;
  foundedYear: number;
  region: string;
  memberCount: number;
  uniformColors: {
    primary: string;
    secondary: string;
  };
}

interface TeamHeaderProps {
  teamInfo: TeamInfo;
}

export const TeamHeader = ({ teamInfo }: TeamHeaderProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.teamInfoSection}>
          <div className={styles.logoContainer}>
            <img
              src={teamInfo.logoUrl}
              alt={`${teamInfo.name} Logo`}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.teamDetails}>
            <div className={styles.teamDetailsInner}>
              <div>
                <h1 className={styles.teamName}>{teamInfo.name}</h1>
                <p className={styles.teamDescription}>{teamInfo.description}</p>
              </div>
              <div className={styles.editSection}>
                <span className={styles.editText}>수정하기</span>
                <ArrowRightIcon className={styles.chevronIcon} />
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
                <svg
                  width='25'
                  height='16'
                  viewBox='0 0 25 16'
                  fill='none'
                  className={styles.jerseyIcon}
                >
                  <path
                    d='M7.02694 8.90575H7.77694V6.89292L6.4598 8.41497L7.02694 8.90575ZM7.02694 15.2303H6.27694C6.27694 15.6446 6.61272 15.9803 7.02694 15.9803V15.2303ZM17.9731 15.2303V15.9803C18.3874 15.9803 18.7231 15.6446 18.7231 15.2303H17.9731ZM17.9731 8.90575L18.5403 8.41497L17.2231 6.89292V8.90575H17.9731ZM20.0256 11.2775L19.4584 11.7683C19.6009 11.9329 19.8078 12.0275 20.0256 12.0275C20.2433 12.0275 20.4502 11.9329 20.5927 11.7683L20.0256 11.2775ZM23.4462 7.3246L24.0134 7.81538C24.2572 7.53362 24.2572 7.11558 24.0134 6.83382L23.4462 7.3246ZM17.9731 1L18.5403 0.509223C18.3978 0.344598 18.1908 0.25 17.9731 0.25V1ZM7.02694 1V0.25C6.80923 0.25 6.60226 0.344598 6.4598 0.509223L7.02694 1ZM1.55383 7.3246L0.986702 6.83382C0.742877 7.11558 0.742877 7.53362 0.986702 7.81538L1.55383 7.3246ZM4.97452 11.2775L4.40739 11.7683C4.54985 11.9329 4.75682 12.0275 4.97452 12.0275C5.19223 12.0275 5.39919 11.9329 5.54165 11.7683L4.97452 11.2775ZM7.02694 8.90575H6.27694V15.2303H7.02694H7.77694V8.90575H7.02694ZM7.02694 15.2303V15.9803H17.9731V15.2303V14.4803H7.02694V15.2303ZM17.9731 15.2303H18.7231V8.90575H17.9731H17.2231V15.2303H17.9731ZM17.9731 8.90575L17.406 9.39653L19.4584 11.7683L20.0256 11.2775L20.5927 10.7867L18.5403 8.41497L17.9731 8.90575ZM20.0256 11.2775L20.5927 11.7683L24.0134 7.81538L23.4462 7.3246L22.8791 6.83382L19.4584 10.7867L20.0256 11.2775ZM23.4462 7.3246L24.0134 6.83382L18.5403 0.509223L17.9731 1L17.406 1.49078L22.8791 7.81538L23.4462 7.3246ZM17.9731 1V0.25H7.02694V1V1.75H17.9731V1ZM7.02694 1L6.4598 0.509223L0.986702 6.83382L1.55383 7.3246L2.12096 7.81538L7.59407 1.49078L7.02694 1ZM1.55383 7.3246L0.986702 7.81538L4.40739 11.7683L4.97452 11.2775L5.54165 10.7867L2.12096 6.83382L1.55383 7.3246ZM4.97452 11.2775L5.54165 11.7683L7.59407 9.39653L7.02694 8.90575L6.4598 8.41497L4.40739 10.7867L4.97452 11.2775Z'
                    fill={teamInfo.uniformColors.primary}
                  />
                </svg>
                <svg
                  width='15'
                  height='13'
                  viewBox='0 0 15 13'
                  fill='none'
                  className={styles.shortsIcon}
                >
                  <path
                    d='M0.932617 11.5781L2.24616 1.72632H12.7545L14.0681 11.5781H8.15712L7.50034 7.47319L6.84357 11.5781H0.932617Z'
                    stroke={teamInfo.uniformColors.secondary}
                    strokeWidth='1.5'
                    strokeLinejoin='round'
                  />
                </svg>
                <div className={styles.socksContainer}>
                  <div className={styles.sock}></div>
                  <div className={styles.sock}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
