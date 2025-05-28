import { z } from 'zod';

// FIXME: 추후 오류 메시지 정의되면 반영 예정
export const matchCreateFormSchema = z.object({
  title: z.string().min(1, '경기명을 입력해주세요.'),
  homeTeamId: z
    .number({
      required_error: '홈팀을 선택해주세요.',
    })
    .min(1, '홈팀을 선택해주세요.'),
  awayTeamId: z
    .number({
      required_error: '상대팀을 선택해주세요.',
    })
    .min(1, '상대팀을 선택해주세요.'),
  matchType: z.enum(['league', 'tournament', 'friendly'], {
    errorMap: () => ({ message: '경기 유형을 선택해주세요.' }),
  }),
  stadium: z.string().min(1, '경기장 주소를 입력해주세요.'),
  detailAddress: z.string().optional(),
  matchDate: z.string().min(1, '경기 일자를 선택해주세요.'),
  plannedStartTime: z
    .string({
      invalid_type_error: '시작 시간을 선택해주세요.',
    })
    .min(1, '시작 시간을 선택해주세요.'),
  plannedEndTime: z
    .string({
      invalid_type_error: '종료 시간을 선택해주세요.',
    })
    .min(1, '종료 시간을 선택해주세요.'),
  mainRefereeName: z.string().min(1, '주심 이름을 입력해주세요.'),
  assistantReferee1: z.string().min(1, '부심 이름을 입력해주세요.'),
  assistantReferee2: z.string().optional(),
  fourthReferee: z.string().optional(),
  firstHalfPeriod: z
    .number({
      invalid_type_error: '전반 시간을 입력해주세요.',
    })
    .min(1, '전반 시간을 입력해주세요.')
    .max(90, '전반 시간은 90분을 초과할 수 없습니다.'),
  secondHalfPeriod: z
    .number({
      invalid_type_error: '후반 시간을 입력해주세요.',
    })
    .min(1, '후반 시간을 입력해주세요.')
    .max(90, '후반 시간은 90분을 초과할 수 없습니다.'),
});

export type MatchCreateFormData = z.infer<typeof matchCreateFormSchema>;
