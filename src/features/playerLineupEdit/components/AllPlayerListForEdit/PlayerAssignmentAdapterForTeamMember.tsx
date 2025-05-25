import { DragEvent, ReactElement } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import {
  MatchUserCreateRequestRole,
  TeamMemberResponse,
  TeamResponse,
} from '@/apis/models';
import {
  useCreateMatchUserMutation,
  useDeleteMatchUserMutation,
} from '@/apis/mutations';
import { matchQuery } from '@/apis/queries';
import { usePlayerLineupEditStore } from '@/features/playerLineupEdit';
import { useIsDragOver } from '@/hooks';

type RenderViewProps<Element extends HTMLElement> = (props: {
  isDragOver: boolean;
  disabled: boolean;
  ref: React.Ref<Element>;
  onDragStart: React.DragEventHandler<Element>;
  onDragOver: React.DragEventHandler<Element>;
  onDrop: React.DragEventHandler<Element>;
  onDragEnd: React.DragEventHandler<Element>;
}) => ReactElement;

type PlayerAssignmentAdapterForTeamMemberProps<Element extends HTMLElement> = {
  matchId: number;
  team: TeamResponse;
  player: TeamMemberResponse;
  render: RenderViewProps<Element>;
};

export const PlayerAssignmentAdapterForTeamMember = <
  Target extends HTMLElement,
>({
  matchId,
  team,
  player,
  render,
}: PlayerAssignmentAdapterForTeamMemberProps<Target>) => {
  const { isDragOver, hoverTargetRef } = useIsDragOver<Target>();
  const { selection, beginAssignment, finishAssignment } =
    usePlayerLineupEditStore();

  const queryClient = useQueryClient();
  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();
  const { mutateAsync: deleteMatchUser } = useDeleteMatchUserMutation();

  const isAvailable = selection && selection.type !== 'all';

  const handleDragStart = () => {
    if (!player.defaultPosition) {
      throw new Error('defaultPosition이 없는 선수입니다.');
    }

    beginAssignment({
      type: 'all',
      player: {
        id: player.id,
        teamId: team.id,
        matchPosition: player.defaultPosition,
        matchGrid: null,
        matchUserId: null,
      },
    });
  };

  const handleDragOver = (e: DragEvent<Target>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAvailable) {
      return;
    }

    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = async (e: DragEvent<Target>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isAvailable) {
      return;
    }
    const { type: sourceType, player: sourcePlayer } = selection;

    switch (sourceType) {
      case 'starter-list':
      case 'starter-grid':
        await deleteMatchUser(sourcePlayer.matchUserId);
        await createMatchUser({
          matchId,
          userId: player.id,
          teamId: team.id,
          role: MatchUserCreateRequestRole.START_PLAYER,
          matchPosition: player.defaultPosition,
          matchGrid: sourcePlayer.matchGrid,
        });
        break;

      case 'bench':
        await deleteMatchUser(sourcePlayer.matchUserId);
        await createMatchUser({
          matchId,
          userId: player.id,
          teamId: team.id,
          role: MatchUserCreateRequestRole.SUB_PLAYER,
          matchPosition: player.defaultPosition,
          matchGrid: null,
        });
        break;

      default:
        throw new Error(`잘못된 target: ${sourceType}입니다`);
    }
    await queryClient.invalidateQueries(matchQuery.players(matchId));
    finishAssignment();
  };

  return render({
    isDragOver,
    disabled: isDragOver && !isAvailable,
    ref: hoverTargetRef,
    onDragStart: handleDragStart,
    onDragOver: handleDragOver,
    onDrop: handleDrop,
    onDragEnd: finishAssignment,
  });
};
