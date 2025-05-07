import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';
import { useSuspenseQuery } from '@tanstack/react-query';

import { MatchCreateRequest } from '@/apis/models/MatchCreateRequest';
import { useCreateMatchMutation } from '@/apis/mutations';
import { teamQuery } from '@/apis/queries';

import * as styles from './MatchCreateForm.css';
import { createSchema, uiSchema } from './MatchCreateForm.schema';

const log = (type: string) => console.log.bind(console, type);

export const MatchCreateForm = () => {
  const { data: teamList } = useSuspenseQuery(teamQuery.listAllQuery);
  const { mutateAsync: createMatch } = useCreateMatchMutation();

  const onSubmit = async (data: MatchCreateRequest) => {
    await createMatch(data);
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
