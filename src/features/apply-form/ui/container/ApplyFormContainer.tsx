import { useState } from 'react';

import { useRentalForm } from '@/features/apply-form/model';

import { NoticeSection, CreateSection, SubmitSection } from '../section';

export const ApplyFormContainer = () => {
  const [step, setStep] = useState(1);
  const { resetForm } = useRentalForm();
  const [resetKey, setResetKey] = useState(0);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleReset = () => {
    resetForm();
    setResetKey((prev) => prev + 1);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      {step === 1 && (
        <NoticeSection
          key={resetKey}
          currentStep={step}
          onNext={handleNext}
          onBack={handleBack}
          resetForm={handleReset}
        />
      )}
      {step === 2 && (
        <CreateSection
          key={resetKey}
          currentStep={step}
          onNext={handleNext}
          onBack={handleBack}
          resetForm={handleReset}
        />
      )}
      {step === 3 && <SubmitSection />}
    </div>
  );
};
