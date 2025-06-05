import { z } from 'zod';

import { TEAM_TYPES } from '@/constants';

export const teamCreateFormSchema = z.object({
  teamName: z.string().min(1, '필수입력 항목입니다.'),
  teamDescription: z
    .string()
    .max(30, '30자 이내로 작성해주세요.')
    .or(z.literal(''))
    .optional(),
  teamType: z.string().refine(
    // NOTE: enum을 쓰면 placeholder 값을 보여줄 수 없음
    val => TEAM_TYPES.includes(val as (typeof TEAM_TYPES)[number]),
    {
      message: '팀 유형을 선택해주세요.',
    },
  ),
  foundedYear: z
    .number({
      invalid_type_error: '올바른 년도를 입력해주세요.',
    })
    .min(1800, '올바른 년도를 입력해주세요.')
    .max(new Date().getFullYear(), '올바른 년도를 입력해주세요.')
    .optional(),
  activityArea: z.string().min(1, '필수입력 항목입니다.'),
  representativeName: z.string().min(1, '필수입력 항목입니다.'),
  representativePhone: z.string().min(1, '필수입력 항목입니다.'),
  memberLimit: z
    .number({
      invalid_type_error: '필수입력 항목입니다.',
    })
    .min(0, '0 이상 입력해주세요.'),
  hasNoMemberLimit: z.boolean(),
  uniformColors: z.object({
    top: z.string().refine(val => val !== '', {
      message: '상의 색상을 선택해주세요.',
    }),
    bottom: z.string().refine(val => val !== '', {
      message: '하의 색상을 선택해주세요.',
    }),
    socks: z.string().refine(val => val !== '', {
      message: '스타킹 색상을 선택해주세요.',
    }),
  }),
});

export type TeamCreateFormData = z.infer<typeof teamCreateFormSchema>;
