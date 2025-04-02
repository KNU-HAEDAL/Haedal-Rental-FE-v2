import { useState } from 'react';

import { ItemApplyForm, NoticeContainer, SubmitContainer } from '@/features';
import { PageWrapper } from '@/widgets';

export const ApplyFormPage = () => {
  const [step, setStep] = useState(1);

  return (
    <PageWrapper>
      {step === 1 && <NoticeContainer step={step} setStep={setStep} />}
      {step === 2 && <ItemApplyForm step={step} setStep={setStep} />}
      {step === 3 && <SubmitContainer />}
    </PageWrapper>
  );
};
