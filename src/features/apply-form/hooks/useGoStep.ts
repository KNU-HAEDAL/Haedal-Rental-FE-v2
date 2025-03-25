import { useCallback } from 'react';

type Props = {
  step: number;
  setStep: (step: number) => void;
};

export const useGoStep = ({ step, setStep }: Props) => {
  const goNextStep = useCallback(() => {
    setStep(Math.min(step + 1, 3));
  }, [step, setStep]);

  const goPrevStep = useCallback(() => {
    setStep(Math.max(step - 1, 1));
  }, [step, setStep]);

  return { goNextStep, goPrevStep };
};
