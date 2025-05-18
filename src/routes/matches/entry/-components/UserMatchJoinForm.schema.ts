import { RJSFSchema, UiSchema } from '@rjsf/utils';

import {
  MatchListResponse,
  TeamMemberResponse,
  TeamSearchResponse,
} from '@/apis/models';

// FIXME: 현재 단순 명단 추가 기능만 있어서 그렇게만 진행
// TODO: 팀 목록 조회 필요
// TODO: 팀 명단 목록 조회 필요
export const createSchema = (
  teamList: TeamSearchResponse[],
  teamMemberList: TeamMemberResponse[],
  matchList: MatchListResponse[],
): RJSFSchema => ({
  title: '선수 매치 등록',
  description: '임시 선수 매치 등록 폼. 아래 내용을 채워주세요.',
  type: 'object',
  required: ['teamId', 'matchId', 'userId', 'role', 'matchPosition'],
  properties: {
    teamId: {
      type: 'integer',
      title: '팀',
      description: '기준이 될 홈 팀을 선택해주세요',
      format: 'int64',
      oneOf: teamList.map(team => ({
        type: 'integer',
        title: `${team.name} (id: ${team.id})`,
        const: team.id,
      })),
      default: teamList[0]?.id,
    },
    matchId:
      matchList.length === 0
        ? {
            type: 'integer',
            title: '매치',
            format: 'int64',
            readOnly: true,
          }
        : {
            type: 'integer',
            title: '매치',
            format: 'int64',
            oneOf: matchList.map(match => ({
              type: 'integer',
              title: `${match.matchTitle} - [${match.homeTeamName}] vs [${match.awayTeamName}] (id: ${match.matchId})`,
              const: match.matchId,
            })),
            default: matchList[0]?.matchId,
          },
    userId:
      teamMemberList.length === 0
        ? {
            type: 'integer',
            title: '유저',
            format: 'int64',
            readOnly: true,
          }
        : {
            type: 'integer',
            title: '유저',
            format: 'int64',
            oneOf: teamMemberList.map(member => ({
              type: 'integer',
              title: `${member.name} ${member.number} ${member.defaultPosition} (id: ${member.id})`,
              const: member.id,
            })),
            default: teamMemberList[0]?.id,
          },
    role: {
      type: 'string',
      title: '선발 여부',
      oneOf: [
        {
          type: 'string',
          title: '선발',
          const: 'START_PLAYER',
        },
        {
          type: 'string',
          title: '교체',
          const: 'SUB_PLAYER',
        },
        {
          type: 'string',
          title: '기록관',
          const: 'ARCHIVES',
        },
      ],
      default: 'START_PLAYER',
    },
    matchPosition: {
      type: 'string',
      title: '포지션',
      default: 'FW',
      enum: ['FW', 'MF', 'DF', 'GK'],
    },
    matchGrid: {
      type: 'number',
      title: '선발 선수 위치',
      default: 0,
      minimum: 0,
      maximum: 29,
    },
  },
});

export const uiSchema: UiSchema = {};
