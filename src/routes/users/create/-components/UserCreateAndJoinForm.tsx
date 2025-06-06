import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import { useSuspenseQuery } from '@tanstack/react-query';

import {
  useCreateUserMutation,
  useUserJoinTeamMutation,
} from '@/apis/mutations';
import { teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import * as styles from './UserCreateAndJoinForm.css';
import { createSchema, uiSchema } from './UserCreateAndJoinForm.schema';

const log = (type: string) => console.log.bind(console, type);

// NOTE: 임시 유저를 생성하고, 팀에 추가
export const UserCreateAndJoinForm = () => {
  const { data: teamList } = useSuspenseQuery(teamQuery.listAll);
  const { mutateAsync: createUser } = useCreateUserMutation();
  const { mutateAsync: userJoinTeam } = useUserJoinTeamMutation();

  // TODO: 별도의 wrapper로 추출하는 것도 좋아보임 (helper?)
  const onSubmit = async ({
    name,
    teamId,
    number,
    defaultPosition,
  }: {
    name: string;
    teamId: number;
    number: number;
    defaultPosition: string;
  }) => {
    const userId = (await createUser(name)).data;
    await userJoinTeam({ userId, teamId, number, defaultPosition });
    queryClient.invalidateQueries({
      queryKey: teamQuery.memberList(teamId).queryKey,
    });
  };

  return (
    <div className={styles.rootContainer}>
      <Form
        schema={createSchema(teamList.data)}
        uiSchema={uiSchema}
        validator={validator}
        liveValidate
        noHtml5Validate
        onChange={log('changed')}
        onSubmit={({ formData }) => onSubmit(formData)}
        onError={log('errors')}
      />
    </div>
  );
};
