import Form from '@rjsf/mui';
import validator from '@rjsf/validator-ajv8';

import { useLoginMutation } from '@/apis/mutations';

import * as styles from './LoginForm.css';
import { loginSchema, uiSchema } from './LoginForm.schema';

const log = (type: string) => console.log.bind(console, type);

export const LoginForm = () => {
  const { mutateAsync: login } = useLoginMutation();

  const onSubmit = async (data: { id: string; pw: string }) => {
    await login(data);
  };

  return (
    <div className={styles.rootContainer}>
      <Form
        schema={loginSchema}
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
