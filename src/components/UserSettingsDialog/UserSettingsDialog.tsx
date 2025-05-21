import { useEffect, useRef, useState } from 'react';

import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';

import { teamQuery, userQuery } from '@/apis/queries';
import { useUserSettingsModalStore } from '@/stores';

import * as styles from './UserSettingsDialog.css';

export const UserSettingsDialog = () => {
  const queryClient = useQueryClient();
  const { data: teams } = useSuspenseQuery(teamQuery.listAll);
  const { isOpen, close } = useUserSettingsModalStore();
  const { data: me } = useSuspenseQuery(userQuery.me);
  const [selectedTeamId, setSelectedTeamId] = useState<number>(me?.teamId ?? 1);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const updateSelfTeam = (teamId: number) => {
    queryClient.setQueryData(userQuery.me.queryKey, prev => {
      if (!prev) return prev;
      const updatedUser = {
        ...prev,
        teamId,
      };

      localStorage.setItem('user', JSON.stringify(updatedUser));

      return updatedUser;
    });
  };

  const handleSubmit = () => {
    updateSelfTeam(selectedTeamId);
    close();
  };

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={dialogRef} className={styles.dialog}>
      <div className={styles.rootContainer}>
        <h2>개인 설정</h2>
        <label htmlFor='teamId'>팀 ID</label>
        <select
          id='teamId'
          value={selectedTeamId}
          onChange={e => setSelectedTeamId(Number(e.target.value))}
        >
          {teams.data?.map(team => (
            <option key={team.id} value={team.id}>
              [id: {team.id}] {team.name}
            </option>
          ))}
        </select>
        <div className={styles.footerContainer}>
          <button
            className={styles.button({ variant: 'primary' })}
            onClick={handleSubmit}
          >
            저장
          </button>
          <button
            className={styles.button({ variant: 'ghost' })}
            onClick={close}
          >
            닫기
          </button>
        </div>
      </div>
    </dialog>
  );
};
