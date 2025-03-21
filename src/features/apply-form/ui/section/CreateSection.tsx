import { ContentsContainer, DescriptionSection } from '@/widgets';

import {
  ProgressBar,
  NavigationButtons,
  FormInput,
  CategorySelector,
  RentalPeriodSelector,
  ImageUploader,
} from '../../components';

export const CreateSection = ({
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
    <div>
      <ContentsContainer title='물품 대여 장부 작성'>
        <DescriptionSection>
          <div className='p-6 text-start'>
            <FormInput />
          </div>
        </DescriptionSection>
      </ContentsContainer>

      <FormSection>
        <div className='p-6 text-start'>
          <CategorySelector />
        </div>
      </FormSection>

      <FormSection>
        <div className='p-6 text-start'>
          <RentalPeriodSelector />
        </div>
      </FormSection>

      <FormSection>
        <div className='p-6 text-start'>
          <ImageUploader />
        </div>
      </FormSection>

      <div className='mt-4 flex w-full flex-col items-center'>
        <ProgressBar step={currentStep} totalSteps={3} />
        <NavigationButtons
          currentStep={currentStep}
          onNext={onNext}
          onBack={onBack}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
};

const FormSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='mt-2 overflow-hidden border border-gray-200'>
      {children}
    </section>
  );
};
