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
} from '@/shared';

type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export const ReturnAlert = ({ isOpen, setIsOpen }: Props) => {
  const onClickRemove = () => {
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
            해당 물품을 반납하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className='flex w-full justify-center gap-3 pb-3'>
          <AlertDialogCancel asChild>
            <Button variant='outline' onClick={() => setIsOpen(false)}>
              취소
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={onClickRemove}>확인</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
