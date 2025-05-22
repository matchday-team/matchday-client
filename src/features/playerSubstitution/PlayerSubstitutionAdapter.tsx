import { DragEvent, ReactElement } from 'react';

import { MatchUserResponse, TeamResponse } from '@/apis/models';
import { useIsDragOver } from '@/hooks';
import { type SubstitutionSourceType, useSubstitutionStore } from '@/stores';

import * as policies from './PlayerSubstitutionPolicies';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
  onDragStart: React.DragEventHandler<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
  onDragEnd: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerSubstitutionAdapterProps<Element extends HTMLElement> = {
  mode: SubstitutionSourceType;
  team: TeamResponse;
  player: MatchUserResponse;
  onSwap: (inPlayerId: number, outPlayerId: number) => void;
  render: RenderViewProps<Element>;
};

export const PlayerSubstitutionAdapter = <Target extends HTMLElement>({
  mode,
  team,
  player,
  onSwap,
  render,
}: PlayerSubstitutionAdapterProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { getIsSubstitutionTarget, beginSubstitution, finishSubstitution } =
    useSubstitutionStore();

  const isAvailable =
    policies.checkPlayerAvailable[mode](player) &&
    getIsSubstitutionTarget(mode, team);

  const handleDragStart = (e: DragEvent<Target>) => {
    e.dataTransfer.setData('text/plain', player.id.toString());
    beginSubstitution(mode, team, player);
  };

  const handleDragOver = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: DragEvent<Target>) => {
    if (!isAvailable) {
      return;
    }

    const counterpartPlayerId = Number(e.dataTransfer.getData('text/plain'));
    if (mode === 'starter') {
      onSwap(counterpartPlayerId, player.id);
    } else {
      onSwap(player.id, counterpartPlayerId);
    }
  };

  return render({
    isDragOver,
    disabled: !isAvailable,
    ref: hoverTargetRef,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onDragEnd: finishSubstitution,
  });
};
