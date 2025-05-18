// TODO: 팀 id 선택은 조회를 통해 구성하는 게 좋아보임
import { RJSFSchema, UiSchema } from '@rjsf/utils';

export const loginSchema: RJSFSchema = {
  title: '로그인',
  description: '게스트 로그인 아이디: matchday, 비밀번호: matchday',
  type: 'object',
  required: ['id', 'pw'],
  properties: {
    id: {
      type: 'string',
      title: '아이디',
    },
    pw: {
      type: 'string',
      title: '비밀번호',
    },
  },
};

export const uiSchema: UiSchema = {
  id: {
    'ui:autofocus': true,
  },
  pw: {
    'ui:widget': 'password',
  },
};
