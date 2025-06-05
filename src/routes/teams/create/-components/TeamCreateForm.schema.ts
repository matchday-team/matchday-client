import { z } from 'zod';

export const teamCreateFormSchema = z.object({
  teamName: z.string().min(1, '필수입력 항목입니다.'),
  teamDescription: z
    .string()
    .max(30, '30자 이내로 작성해주세요.')
    .or(z.literal(''))
    .optional(),
  teamType: z.string().min(1, '필수입력 항목입니다.'),
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
    top: z.string().min(1, '상의 색상을 선택해주세요.'),
    bottom: z.string().min(1, '하의 색상을 선택해주세요.'),
    socks: z.string().min(1, '스타킹 색상을 선택해주세요.'),
  }),
});

export type TeamCreateFormData = z.infer<typeof teamCreateFormSchema>;
