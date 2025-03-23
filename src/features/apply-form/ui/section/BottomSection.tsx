import { Button, Progress } from '@/shared';

type Props = {
  step: number;
  setStep: (step: number) => void;
  resetForm: () => void;
};

export const BottomSection = ({ step, resetForm, setStep }: Props) => {
  const onClick = (type: string) => {
    const handlerNextStep = (prev: number) => {
      return Math.min(prev + 1, 3);
    };
    const handlerPrevStep = (prev: number) => {
      return Math.max(prev - 1, 1);
    };

    if (type === 'next') {
      setStep(handlerNextStep(step));
    } else {
      setStep(handlerPrevStep(step));
    }
  };

  const progressValue = (step / 2) * 100;

  return (
    <div className='w-layout flex flex-col items-center'>
      <div className='flex w-2/5 items-center gap-3 py-5'>
        <Progress value={progressValue} className='flex-1' />
        <p className='text-sm font-semibold'>{step} / 2 페이지</p>
      </div>
      <div className='mb-3 flex w-full items-center justify-between gap-4'>
        <Button variant='secondary' onClick={resetForm}>
          양식 지우기
        </Button>
        {step < 3 && (
          <div className='flex gap-3'>
            <Button
              variant='outline'
              className='px-5'
              onClick={() => onClick('prev')}
            >
              뒤로
            </Button>
            <Button
              className='px-5'
              variant={step === 2 ? 'primary' : 'outline'}
              onClick={() => onClick('next')}
            >
              {step === 2 ? '제출' : '다음'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
