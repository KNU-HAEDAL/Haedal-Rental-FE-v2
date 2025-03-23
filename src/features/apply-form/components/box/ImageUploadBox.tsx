import { useState } from 'react';

import { Camera } from 'lucide-react';

import { Input } from '@/shared';

export const ImageUploadBox = () => {
  const [image, setImage] = useState<string | null>('');

  const imageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='flex flex-col gap-3'>
      <p>대여 물품을 사진으로 찍어서 업로드해주세요.</p>
      <label
        htmlFor='image-upload'
        className='mx-auto flex h-32 w-32 cursor-pointer items-center justify-center overflow-hidden border border-gray-300'
      >
        {image ? (
          <img
            src={image}
            alt='미리보기'
            className='h-full w-full object-cover'
          />
        ) : (
          <div className='flex flex-col items-center gap-2'>
            <Camera strokeWidth={1} className='h-12 w-12 text-gray-400' />
            <p className='font-semibold text-gray-400'>사진 추가</p>
          </div>
        )}
      </label>
      <Input
        id='image-upload'
        type='file'
        accept='image/*'
        className='hidden'
        onChange={imageUpload}
      />
    </div>
  );
};
