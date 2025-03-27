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
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const RemoveAlert = ({ open, setOpen }: Props) => {
  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: 'Sonner' }), 1000),
    );

  const onClickRemove = () => {
    toast.promise(promise, {
      loading: '물품을 삭제하는 중...',
      success: '물품이 삭제되었습니다.',
      error: '물품 삭제를 실패했습니다.',
    });
    setOpen(false);
  };
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className='w-sm border-none p-0'>
        <AlertDialogHeader className='w-full'>
          <AlertDialogTitle className='bg-haedal flex w-full justify-center rounded-t-md py-3 text-white'>
            물품 삭제
          </AlertDialogTitle>
          <AlertDialogDescription className='flex justify-center py-2'>
            선택한 물품을 정말 삭제하시겠습니까?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className='flex w-full justify-center gap-3 pb-3'>
          <AlertDialogCancel asChild>
            <Button variant='outline' onClick={() => setOpen(false)}>
              취소
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button onClick={onClickRemove}>삭제</Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
