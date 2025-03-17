import { Button } from '@/shared';

export const NavigationButtons = ({
  currentStep,
  onNext,
  onBack,
  resetForm,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  resetForm: () => void;
}) => {
  return (
    <div className='mt-4 flex w-full items-center justify-end gap-4'>
      <Button variant='ghost' className='mr-auto' onClick={resetForm}>
        양식 지우기
      </Button>
      {currentStep < 3 && (
        <Button variant='outline' onClick={onBack}>
          뒤로
        </Button>
      )}
      {currentStep < 3 && (
        <Button variant='moon' onClick={onNext}>
          {currentStep === 2 ? '제출' : '다음'}
        </Button>
      )}
    </div>
  );
};
