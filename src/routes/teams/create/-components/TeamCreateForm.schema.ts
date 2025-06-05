import { z } from 'zod';

import { TEAM_TYPES } from '@/constants';

// NOTE: 현재 팀 생성 API 필드가 없어서 필드명은 추후 변경될 예정
export const teamCreateFormSchema = z.object({
  teamName: z.string().min(1, '필수입력 항목입니다.'),
  teamDescription: z.string().max(30, '30자 이내로 작성해주세요.').optional(),
  teamType: z.string().refine(
    // NOTE: enum을 쓰면 placeholder 값('')을 보여줄 수 없음
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
  representativePhone: z
    .string()
    .min(1, '필수입력 항목입니다.')
    .regex(/^01[0-9]-\d{4}-\d{4}$/, '010-0000-0000 형태로 입력해주세요.'),
  memberLimit: z
    .number({
      invalid_type_error: '필수입력 항목입니다.',
    })
    .min(0, '0 이상 입력해주세요.'),
  hasNoMemberLimit: z.boolean(),
  uniformColors: z.object({
    top: z.string().min(1, '상의 색상을 선택해주세요.'),
    bottom: z.string().min(1, '하의 색상을 선택해주세요.'),
    socks: z.string().min(1, '스타킹 색상을 선택해주세요.'),
  }),
  teamImg: z.instanceof(File).nullable().optional(),
});

export type TeamCreateFormData = z.infer<typeof teamCreateFormSchema>;
