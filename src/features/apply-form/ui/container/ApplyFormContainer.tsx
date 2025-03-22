import { useState } from 'react';

import { useRentalForm, useStepStore } from '@/features/apply-form/model';

import { CreateSection, NoticeSection, SubmitSection } from '../section';

export const ApplyFormContainer = () => {
  // const { stepInfo } = useFormStep();
  const { step } = useStepStore();
  const { resetForm } = useRentalForm();
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    resetForm();
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      {step === 1 && (
        <NoticeSection
          currentStep={step}
          key={resetKey}
          resetForm={handleReset}
        />
      )}
      {step === 2 && <CreateSection key={resetKey} resetForm={handleReset} />}
      {step === 3 && <SubmitSection />}
    </div>
  );
};
