import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';

import { MatchCreateRequest } from '@/apis/models/MatchCreateRequest';
import { useCreateMatchMutation } from '@/apis/mutations';

import * as styles from './MatchCreateForm.css';
import { schema } from './MatchCreateForm.schema';
import { uiSchema } from './MatchCreateForm.schema';

const log = (type: string) => console.log.bind(console, type);

export const MatchCreateForm = () => {
  const { mutateAsync: createMatch } = useCreateMatchMutation();

  const onSubmit = async (data: MatchCreateRequest) => {
    await createMatch(data);
  };

  return (
    <div className={styles.rootContainer}>
      <Form
        schema={schema}
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
