import { SyntheticEvent } from 'react';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { ChevronDownIcon } from '@/assets/icons';
import noProfilePlayerImage from '@/assets/images/noProfilePlayer.png';
import { useIsDragOver } from '@/hooks';
import { useSubstitutionStore } from '@/stores';

import * as styles from './PlayerListItem.css';

interface PlayerItemProps {
  isSelected: boolean;
  team: TeamResponse;
  player: MatchUserResponse;
  onClick: () => void;
  onSwap: (inPlayerId: number, outPlayerId: number) => void;
}

const displayDashIfZero = (value: number) => {
  return value === 0 ? '-' : value;
};

export const PlayerItem = ({
  isSelected,
  team,
  player,
  onClick,
  onSwap,
}: PlayerItemProps) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<HTMLLIElement>();
  const { getIsSubstitutionTarget, beginSubstitution, finishSubstitution } =
    useSubstitutionStore();
  const disabled = player.subIn || !getIsSubstitutionTarget('starter', team);

  const setFallbackImageIfLoadFail = (
    e: SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = noProfilePlayerImage;
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('application/json', JSON.stringify(player));
    beginSubstitution('starter', team, player);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    if (disabled) {
      return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
    if (disabled) {
      return;
    }

    const playerComingIn = JSON.parse(
      e.dataTransfer.getData('application/json'),
    ) as MatchUserResponse;

    onSwap(playerComingIn.id, player.id);
  };

  return (
    <li
      className={styles.rootContainer({ isSelected, isDragOver, disabled })}
      onClick={onClick}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragEnd={finishSubstitution}
      draggable={!disabled}
      ref={hoverTargetRef}
    >
      <div className={styles.infoContainer}>
        <img
          className={styles.profileImage}
          src={player.profileImg ?? noProfilePlayerImage}
          alt=''
          onError={setFallbackImageIfLoadFail}
        />
        <span className={styles.number}>{player.number}</span>
        <span className={styles.name}>{player.name}</span>
        <ChevronDownIcon
          className={styles.subInIcon({ visible: player.subIn })}
        />
        <span className={styles.position}>{player.matchPosition}</span>
      </div>
      <div className={styles.statContainer}>
        <span className={styles.number}>{displayDashIfZero(player.goals)}</span>
        <span className={styles.number}>
          {displayDashIfZero(player.assists)}
        </span>
        <div className={styles.cautionContainer}>
          <div
            className={styles.playerCautionCard({
              variant: player.yellowCards > 0 ? 'yellow' : 'empty',
            })}
          />
          <div
            className={styles.playerCautionCard({
              variant: player.redCards > 0 ? 'red' : 'empty',
            })}
          />
        </div>
      </div>
    </li>
  );
};
