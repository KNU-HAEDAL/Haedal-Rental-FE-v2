import { z } from 'zod';

const idRegex = /^[a-z0-9]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[^a-z0-9]).+$/;
const phoneRegex = /^\d{10,11}$/;

export const signupFormSchema = z
  .object({
    id: z
      .string()
      .min(6, '아이디는 최소 6자여야 합니다.')
      .max(12, '아이디는 최대 12자까지 입력 가능합니다.')
      .refine(
        (value) => idRegex.test(value),
        '아이디는 영문(소문자)과 숫자로만 이루어져야 합니다.',
      ),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자여야 합니다.')
      .max(20, '비밀번호는 최대 20자까지 입력 가능합니다.')
      .refine(
        (value) => passwordRegex.test(value),
        '비밀번호는 영문(소문자), 숫자, 특수문자를 모두 포함해야 합니다.',
      ),
    passwordConfirm: z.string().min(1, '비밀번호 확인을 입력해주세요.'),
    name: z.string().min(2, '이름은 최소 2자 이상 입력해주세요.'),
    phone: z.string().refine(
      (value) => phoneRegex.test(value),

      '휴대폰 번호는 10~11자리 숫자로 입력해주세요.',
    ),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export type SignupFormData = z.infer<typeof signupFormSchema>;
