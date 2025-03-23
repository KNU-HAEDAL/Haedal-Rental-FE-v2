import { z } from 'zod';

export const ApplyFormSchema = z.object({
  itemName: z.string().min(1, { message: '물품 이름을 입력해주세요.' }),
  category: z.string().min(1, { message: '카테고리를 선택해주세요.' }),
  rentalStartDate: z.string().refine((date) => date !== undefined, {
    message: '대여 시작 날짜를 선택해주세요.',
  }),
  rentalEndDate: z.string(),
  images: z.array(z.string()),
});

export type ApplyForm = z.infer<typeof ApplyFormSchema>;
