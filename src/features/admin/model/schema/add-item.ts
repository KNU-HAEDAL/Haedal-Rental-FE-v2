import { z } from 'zod';

export const AddItemSchema = z.object({
  name: z.string().min(1, { message: '물품 이름을 작성해주세요.' }),
  type: z.enum(['book', 'boardGame', 'stationery', 'etc']),
  approved: z.literal(true, {
    errorMap: () => ({ message: '체크 이후에 물품 추가가 가능합니다.' }),
  }),
});

export type AddItem = z.infer<typeof AddItemSchema>;
