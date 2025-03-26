import { z } from 'zod';

// 5MB (바이트 단위 변환)
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const ApplyFormSchema = z.object({
  itemName: z.string().min(1, { message: '물품 이름을 입력해주세요.' }),
  category: z.string().min(1, { message: '카테고리를 선택해주세요.' }),
  rentalStartDate: z
    .string()
    .min(1, { message: '대여 시작 날짜를 선택해주세요.' }),
  rentalEndDate: z.string().min(1, { message: '반납 날짜를 선택해주세요.' }),
  itemImage: z
    .array(z.instanceof(File))
    .min(1, { message: '이미지를 업로드해야 합니다.' })
    .refine((files) => files.every((file) => file.size <= MAX_FILE_SIZE), {
      message: '각 파일은 최대 5MB까지 업로드할 수 있습니다.',
    }),
});

export type ApplyForm = z.infer<typeof ApplyFormSchema>;
