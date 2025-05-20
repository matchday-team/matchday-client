import { useState } from 'react';

import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import { useQuery } from '@tanstack/react-query';

import {
  MatchListResponse,
  MatchUserCreateRequestRole,
  TeamSearchResponse,
} from '@/apis/models';
import { useCreateMatchUserMutation } from '@/apis/mutations';
import { matchQuery, teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import * as styles from './UserMatchJoinForm.css';
import { createSchema, uiSchema } from './UserMatchJoinForm.schema';

const log = (type: string) => console.log.bind(console, type);

interface FormData {
  matchId: number;
  userId: number;
  teamId: number;
  matchPosition: string;
  matchGrid: number;
  role: MatchUserCreateRequestRole;
}

// NOTE: 팀 선택 -> 매치 선택 -> 유저 선택 -> 참여
export const UserMatchJoinForm = ({
  selectedTeamId,
  teamList,
  matchList,
  onSelectTeam,
  onSelectMatch,
}: {
  selectedTeamId: number;
  teamList: TeamSearchResponse[];
  matchList: MatchListResponse[];
  onSelectTeam: (teamId: number) => void;
  onSelectMatch: (matchId: number) => void;
}) => {
  // NOTE: Uncontrolled 방식으로 쓰면 schema가 바뀔 때마다 default 값으로 초기화되므로, 값 변경이 불가능해짐.
  const [formData, setFormData] = useState<FormData>({
    matchId: -1,
    userId: -1,
    teamId: -1,
    matchPosition: 'FW',
    matchGrid: 0,
    role: 'START_PLAYER',
  });
  const { data: teamMemberList } = useQuery({
    ...teamQuery.memberList(selectedTeamId),
    enabled: selectedTeamId !== -1,
  });

  const { mutateAsync: createMatchUser } = useCreateMatchUserMutation();

  // TODO: 별도의 wrapper로 추출하는 것도 좋아보임 (helper?)
  const onSubmit = async ({
    matchId,
    userId,
    teamId,
    matchPosition,
    matchGrid,
    role,
  }: FormData) => {
    await createMatchUser({
      matchId,
      userId,
      teamId,
      matchPosition,
      matchGrid,
      role,
    });
    queryClient.invalidateQueries({
      queryKey: matchQuery.players(matchId).queryKey,
    });
  };

  const schema = createSchema(
    teamList,
    teamMemberList?.data?.teamMemberResponses ?? [],
    matchList,
  );

  return (
    <div className={styles.rootContainer}>
      <Form
        formData={formData}
        schema={schema}
        uiSchema={uiSchema}
        validator={validator}
        liveValidate
        noHtml5Validate
        onChange={e => {
          if (
            e.formData.matchId === undefined ||
            e.formData.teamId === undefined
          ) {
            // NOTE: 상태 변경 도중 undefined로 잠시 변함
            return;
          }
          setFormData(e.formData);
          log('changed')(e.formData.matchId, e.formData.teamId);
          onSelectMatch(e.formData.matchId);
          onSelectTeam(e.formData.teamId);
        }}
        onSubmit={({ formData }) => onSubmit(formData)}
        onError={log('errors')}
      />
    </div>
  );
};
