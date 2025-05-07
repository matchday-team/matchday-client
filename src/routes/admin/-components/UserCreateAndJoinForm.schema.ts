// TODO: 팀 id 선택은 조회를 통해 구성하는 게 좋아보임
import { RJSFSchema, UiSchema } from '@rjsf/utils';

import { TeamResponse } from '@/apis/models';

import * as nameUtils from './nameUtils';

export const createSchema = (teamList: TeamResponse[]): RJSFSchema => ({
  title: '선수 생성 및 등록',
  description: '임시 선수 생성 및 등록 폼. 아래 내용을 채주세요.',
  type: 'object',
  required: ['name', 'number', 'defaultPosition', 'teamId'],
  properties: {
    name: {
      type: 'string',
      title: '선수명',
      default: nameUtils.getRandomName(),
      minLength: 1,
      maxLength: 4,
    },
    number: {
      type: 'integer',
      title: '등번호',
      default: 7,
      minimum: 1,
      maximum: 99,
    },
    defaultPosition: {
      type: 'string',
      title: '포지션',
      default: 'FW',
      enum: ['FW', 'MF', 'DF', 'GK'],
    },
    teamId: {
      type: 'integer',
      title: '팀',
      format: 'int64',
      oneOf: teamList.map(team => ({
        type: 'integer',
        title: `${team.name} (id: ${team.id})`,
        enum: [team.id],
      })),
      default: teamList[0]?.id,
    },
  },
});

export const uiSchema: UiSchema = {};
