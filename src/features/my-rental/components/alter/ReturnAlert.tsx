import { useState } from 'react';

import { Camera } from 'lucide-react';
import { toast } from 'sonner';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  Button,
  Input,
} from '@/shared';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const ReturnAlert = ({ isOpen, setIsOpen }: Props) => {
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

  const onClickCancel = () => {
    setImage(null);
    setIsOpen(false);
  };

  const onClickReturn = () => {
    // Todo: 물품 반납 API 호출
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 2000);
    });

    toast.promise(promise, {
      loading: '반납하는 중...',
      success: '반납되었습니다.',
      error: '반납 실패했습니다. 다시 시도해주세요.',
    });
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className='w-sm border-none p-0'>
        <AlertDialogHeader className='w-full'>
          <AlertDialogTitle className='bg-haedal flex w-full justify-center rounded-t-md py-3 text-white'>
            물품 반납
          </AlertDialogTitle>
          <AlertDialogDescription className='flex justify-center py-2'>
            반납 완료 사진을 추가하고 확인 버튼을 눌러주세요.
          </AlertDialogDescription>
          <label
            htmlFor='image-upload'
            className='flex cursor-pointer flex-row items-center gap-2 self-center text-sm'
          >
            {image ? (
              <>
                <div className='flex aspect-3/4 w-8 items-center justify-center self-center overflow-hidden border border-gray-300'>
                  <img
                    src={image}
                    alt='미리보기'
                    className='h-full w-full object-cover'
                  />
                </div>
                이미지 변경
              </>
            ) : (
              <>
                <Camera
                  strokeWidth={1}
                  className='aspect-square w-6 text-gray-400'
                />
                이미지 추가
              </>
            )}
          </label>
          <Input
            id='image-upload'
            type='file'
            accept='image/*'
            className='hidden'
            onChange={imageUpload}
          />
        </AlertDialogHeader>
        <div className='flex w-full justify-center gap-3 pb-3'>
          <AlertDialogCancel asChild>
            <Button variant='outline' onClick={onClickCancel}>
              취소
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button disabled={!image} onClick={onClickReturn}>
              확인
            </Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
