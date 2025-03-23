import { useState } from 'react';

import {
  BottomSection,
  CreateSection,
  NoticeSection,
  SubmitSection,
  useRentalForm,
} from '@/features';
import { PageWrapper } from '@/widgets';

export const ApplyFormPage = () => {
  const [step, setStep] = useState(1);

  const { resetForm } = useRentalForm();

  //TODO: react-hook-form 구현 시 reset 부분 삭제
  const [resetKey, setResetKey] = useState(0);

  const handleReset = () => {
    resetForm();
    setResetKey((prev) => prev + 1);
  };

  return (
    <PageWrapper>
      {step === 1 && <NoticeSection key={resetKey} />}
      {step === 2 && <CreateSection key={resetKey} />}
      {step === 3 && <SubmitSection />}
      {step < 3 && (
        <BottomSection step={step} setStep={setStep} resetForm={handleReset} />
      )}
    </PageWrapper>
  );
};
