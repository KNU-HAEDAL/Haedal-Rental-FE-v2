import { ProgressBar, NavigationButtons } from '../components';
import {
  FormInput,
  CategorySelector,
  RentalPeriodSelector,
  ImageUploader,
} from '../sections';

export const CreateContainer = ({
  currentStep,
  onNext,
  onBack,
  resetForm,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  resetForm: () => void;
}) => {
  return (
    <div className='flex w-[550px] flex-col items-center justify-center bg-white'>
      <div className='w-full space-y-6'>
        <FormSection>
          <header className='bg-haedal rounded-t-lg p-3 text-center text-xl font-bold text-white'>
            물품 대여 장부 작성
          </header>
          <div className='p-6'>
            <FormInput />
          </div>
        </FormSection>

        <FormSection>
          <div className='p-6'>
            <CategorySelector />
          </div>
        </FormSection>

        <FormSection>
          <div className='p-6'>
            <RentalPeriodSelector />
          </div>
        </FormSection>

        <FormSection>
          <div className='p-6'>
            <ImageUploader />
          </div>
        </FormSection>
      </div>

      <ProgressBar step={currentStep} totalSteps={3} />
      <NavigationButtons
        currentStep={currentStep}
        onNext={onNext}
        onBack={onBack}
        resetForm={resetForm}
      />
    </div>
  );
};

const FormSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='overflow-hidden rounded-lg border border-gray-300'>
      {children}
    </section>
  );
};
