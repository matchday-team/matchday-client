import { MatchUserResponse } from '@/apis/models';
import { ArrowRightIcon, ExclamationIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { Button } from '@/components';
import { createFallbackImageHandler } from '@/utils';

import * as styles from './PlayerSubstitutionConfirmModal.css';

interface PlayerSubstitutionConfirmModalProps {
  outPlayer: MatchUserResponse;
  inPlayer: MatchUserResponse;
  onConfirm: () => void;
  onClose: () => void;
  isOpen: boolean;
}

export function PlayerSubstitutionConfirmModal({
  outPlayer,
  inPlayer,
  onConfirm,
  onClose,
  isOpen,
}: PlayerSubstitutionConfirmModalProps) {
  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.backdrop} onClick={handleOverlayClick}>
      <div className={styles.modalContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.bodyContainer}>
            <div className={styles.titleContainer}>
              <ExclamationIcon className={styles.warningIcon} />
              <div className={styles.title}>정말 교체하시겠습니까?</div>
            </div>
            <div className={styles.contentContainer}>
              <PlayerInfo
                player={outPlayer}
                label='Out'
                labelStyle={styles.label({ variant: 'out' })}
              />
              <div>
                <ArrowRightIcon className={styles.arrowRightIcon} />
              </div>
              <PlayerInfo
                player={inPlayer}
                label='In'
                labelStyle={styles.label({ variant: 'in' })}
              />
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button variant='default' onClick={onClose}>
              돌아가기
            </Button>
            <Button variant='primary' onClick={onConfirm}>
              교체하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const fallbackImageHandler = createFallbackImageHandler();

interface PlayerInfoProps {
  player: MatchUserResponse;
  label: string;
  labelStyle: string;
}

function PlayerInfo({ player, label, labelStyle }: PlayerInfoProps) {
  return (
    <div className={styles.playerContainer}>
      <img
        src={player.profileImg ?? noProfilePlayerImage}
        onError={fallbackImageHandler}
        alt=''
        className={styles.playerProfileImage}
      />
      <div className={styles.playerInfoContainer}>
        <div className={styles.playerName}>{player.name}</div>
        <div className={styles.playerNumber}>{player.number}</div>
        <div className={labelStyle}>{label}</div>
      </div>
    </div>
  );
}
