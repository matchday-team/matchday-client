import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import { useSuspenseQuery } from '@tanstack/react-query';

import { MatchCreateRequest } from '@/apis/models/MatchCreateRequest';
import { useCreateMatchMutation } from '@/apis/mutations';
import { matchRecordQuery, teamQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

import * as styles from './MatchCreateForm.css';
import { createSchema, uiSchema } from './MatchCreateForm.schema';

const log = (type: string) => console.log.bind(console, type);

export const MatchCreateForm = () => {
  const { data: teamList } = useSuspenseQuery(teamQuery.listAllQuery);
  const { mutateAsync: createMatch } = useCreateMatchMutation();

  const onSubmit = async (data: MatchCreateRequest) => {
    await createMatch(data);
    // NOTE: 모든 팀의 모든 매치 목록을 갱신할 필요는 없음 -> 한 번에 하는 방법 = ?
    queryClient.invalidateQueries({
      queryKey: matchRecordQuery.listQuery(data.homeTeamId).queryKey,
    });
    queryClient.invalidateQueries({
      queryKey: matchRecordQuery.listQuery(data.awayTeamId).queryKey,
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
