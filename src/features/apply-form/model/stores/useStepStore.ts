import { create } from 'zustand';

type StepState = {
  step: number;
  setStep: (step: number) => void;
  resetStep: () => void;
  nextStep: () => void;
  prevStep: () => void;
};

const initialState = {
  step: 1,
};

export const useStepStore = create<StepState>((set) => ({
  ...initialState,
  setStep: (step: number) => set({ step }),
  resetStep: () => {
    setTimeout(() => {
      set({ ...initialState });
    }, 100);
  },
  nextStep: () => set((state) => ({ step: Math.min(state.step + 1, 3) })),
  prevStep: () => set((state) => ({ step: Math.max(state.step - 1, 1) })),
}));
