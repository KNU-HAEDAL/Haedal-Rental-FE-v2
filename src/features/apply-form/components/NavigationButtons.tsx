import { Button } from '@/shared';

import { useStepStore } from '../model';

export const NavigationButtons = ({
  resetForm,
}: {
  currentStep: number;
  resetForm: () => void;
}) => {
  const { step, nextStep, prevStep } = useStepStore();

  return (
    <div className='mt-4 flex w-full items-center justify-end gap-4'>
      <Button variant='secondary' className='mr-auto' onClick={resetForm}>
        양식 지우기
      </Button>
      {step < 3 && (
        <Button variant='outline' onClick={() => prevStep()}>
          뒤로
        </Button>
      )}
      {step < 3 && (
        <Button
          variant={step === 2 ? 'primary' : 'outline'}
          onClick={() => nextStep()}
        >
          {step === 2 ? '제출' : '다음'}
        </Button>
      )}
    </div>
  );
};
