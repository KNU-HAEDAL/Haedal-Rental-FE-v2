import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/shared';

import { ProgressBar, NavigationButtons } from '../components';
import { NoticeMessage, ItemListButton } from '../sections';

export const NoticeContainer = ({
  currentStep,
  onNext,
  resetForm,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  resetForm: () => void;
}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(RouterPath.MAIN);
  };

  return (
    <div className='flex w-[550px] flex-col items-center justify-center bg-white'>
      <section className='w-full overflow-hidden rounded-lg border border-gray-300 shadow-sm'>
        <header className='bg-haedal p-3 text-center text-xl font-bold text-white'>
          물품 대여 안내
        </header>

        <div className='bg-white p-6 text-left'>
          <NoticeMessage />
          <div className='mt-4 flex justify-start'>
            <ItemListButton />
          </div>
        </div>
      </section>
      <div className='mt-4 flex w-full flex-col items-center'>
        <ProgressBar step={currentStep} totalSteps={3} />
        <NavigationButtons
          currentStep={currentStep}
          onNext={onNext}
          onBack={handleBack}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
};
