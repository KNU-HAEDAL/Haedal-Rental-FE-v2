import { createContext, useContext, useState } from 'react';

type StepInfo = {
  step: number;
};

type FormStepContextData = {
  stepInfo: StepInfo;
  setStep: (step: number) => void;
  onClickStep: (type: 'next' | 'back') => void;
};

type Props = {
  children: React.ReactNode;
};

const FormStepContext = createContext<FormStepContextData | undefined>(
  undefined,
);

export const FormStepProvider = ({ children }: Props) => {
  const [stepInfo, setStepInfo] = useState<StepInfo>({ step: 1 });

  const onClickStep = (type: 'next' | 'back') => {
    setStepInfo((prev) => ({
      step:
        type === 'next'
          ? Math.min(prev.step + 1, 3)
          : Math.max(prev.step - 1, 1),
    }));
  };

  return (
    <FormStepContext
      value={{
        stepInfo,
        setStep: (step: number) => setStepInfo({ step }),
        onClickStep,
      }}
    >
      {children}
    </FormStepContext>
  );
};

export const useFormStep = (): FormStepContextData => {
  const context = useContext(FormStepContext);
  if (!context) {
    throw new Error('useFormStep must be used within a FormStepProvider');
  }
  return context;
};
