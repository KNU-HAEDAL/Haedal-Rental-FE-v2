import { useState } from 'react';

import { ItemApplyForm, NoticeSection, SubmitSection } from '@/features';
import { PageWrapper } from '@/widgets';

export const ApplyFormPage = () => {
  const [step, setStep] = useState(1);

  return (
    <PageWrapper>
      {step === 1 && <NoticeSection step={step} setStep={setStep} />}
      {step === 2 && <ItemApplyForm step={step} setStep={setStep} />}
      {step === 3 && <SubmitSection />}
    </PageWrapper>
  );
};
