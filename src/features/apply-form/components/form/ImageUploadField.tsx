import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { Camera } from 'lucide-react';

import { FormControl, FormField, FormItem, FormMessage, Input } from '@/shared';

type Props = {
  name: string;
};

export const ImageUploadField = ({ name }: Props) => {
  const form = useFormContext();

  const [itemImagePreview, setItemImagePreview] = useState('');

  const image = form.watch('itemImage');

  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setItemImagePreview(URL.createObjectURL(file));
    } else {
      setItemImagePreview('');
    }
  }, [image]);

  const imageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: File[]) => void,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      onChange([file]);
    }
  };

  // FIXME: 두 imageUpload 함수가 방식이 서로 달라서 일단 이 코드도 살려두겠습니다.
  // const imageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       form.setValue('itemImage', [file]);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex w-full flex-col gap-4 border p-5 text-start'>
          <p>대여 물품을 사진으로 찍어서 업로드해주세요.</p>
          <FormControl>
            <div>
              <label
                htmlFor='image-upload'
                className='mx-auto flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden border border-gray-300'
              >
                {itemImagePreview ? (
                  <img
                    src={itemImagePreview}
                    alt='미리보기'
                    className='h-full w-full object-cover'
                  />
                ) : (
                  <div className='flex flex-col items-center gap-2'>
                    <Camera
                      strokeWidth={1}
                      className='h-12 w-12 text-gray-400'
                    />
                    <p className='font-semibold text-gray-400'>사진 추가</p>
                  </div>
                )}
              </label>
              <Input
                type='file'
                id='image-upload'
                accept='image/*'
                className='hidden'
                onChange={(e) => {
                  imageUpload(e, field.onChange);
                }}
              />
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
