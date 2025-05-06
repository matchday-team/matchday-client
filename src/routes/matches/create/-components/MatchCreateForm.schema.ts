// TODO: 팀 id 선택은 조회를 통해 구성하는 게 좋아보임
import { RJSFSchema, UiSchema } from '@rjsf/utils';

import * as timeUtils from './timeUtils';

export const schema: RJSFSchema = {
  title: '매치 생성',
  description: '임시 매치 생성 폼. 아래 내용을 채워주세요.',
  type: 'object',
  required: [
    'title',
    'homeTeamId',
    'awayTeamId',
    'matchType',
    'stadium',
    'matchDate',
    'startTime',
    'endTime',
    'mainRefereeName',
    'assistantReferee1',
    'assistantReferee2',
    'fourthReferee',
    'matchState',
  ],
  properties: {
    title: {
      type: 'string',
      title: '경기명',
      default: `친선경기 ${timeUtils.getYYYYMMDDHHMMSS()}`,
    },
    homeTeamId: {
      type: 'integer',
      title: '홈팀 id',
      format: 'int64',
      default: 1,
    },
    awayTeamId: {
      type: 'integer',
      title: '상대팀 id',
      format: 'int64',
      default: 2,
    },
    matchType: {
      type: 'string',
      title: '매치 타입',
      enum: ['리그', '대회', '친선경기'],
      default: '친선경기',
    },
    stadium: {
      type: 'string',
      title: '경기장 주소',
      default: '서울 성동구 왕십리로 22 한양대학교 종합운동장',
    },
    matchDate: {
      type: 'string',
      title: '경기 일자',
      format: 'date',
      default: timeUtils.YYYYMMDD(),
    },
    startTime: {
      type: 'string',
      title: '경기 시작 시간',
      default: timeUtils.nowHHMMSS(),
    },
    endTime: {
      type: 'string',
      title: '경기 종료 시간',
      default: timeUtils.twoHoursLaterHHMMSS(),
    },
    mainRefereeName: {
      type: 'string',
      default: '주심',
      title: '주심 이름',
    },
    assistantReferee1: {
      type: 'string',
      default: '부심1',
      title: '부심1 이름',
    },
    assistantReferee2: {
      type: 'string',
      default: '부심2',
      title: '부심2 이름',
    },
    fourthReferee: {
      type: 'string',
      default: '대기심',
      title: '대기심 이름',
    },
    matchState: {
      type: 'string',
      title: '매치 상태',
      enum: ['SCHEDULED', 'ONGOING', 'FINISHED'],
      default: 'SCHEDULED',
    },
  },
};

export const uiSchema: UiSchema = {};
