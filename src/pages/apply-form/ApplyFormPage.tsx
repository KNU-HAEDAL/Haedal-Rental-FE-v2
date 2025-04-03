import { useState } from 'react';

import { ApplyFormStep, NoticeStep, SubmitStep } from '@/features';
import { PageWrapper } from '@/widgets';

export const ApplyFormPage = () => {
  const [step, setStep] = useState(1);

  return (
    <PageWrapper>
      {step === 1 && <NoticeStep step={step} setStep={setStep} />}
      {step === 2 && <ApplyFormStep step={step} setStep={setStep} />}
      {step === 3 && <SubmitStep />}
    </PageWrapper>
  );
};
