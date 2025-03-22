import { ContentsContainer, DescriptionSection } from '@/widgets';

import {
  CategorySelector,
  FormInput,
  FormWrapper,
  ImageUploader,
  NavigationButtons,
  ProgressBar,
  RentalPeriodBox,
} from '../../components';
import { useStepStore } from '../../model';

export const CreateSection = ({ resetForm }: { resetForm: () => void }) => {
  const { step } = useStepStore();

  return (
    <div className='flex w-full flex-col gap-5'>
      <ContentsContainer title='물품 대여 장부 작성'>
        <DescriptionSection>
          <FormInput />
        </DescriptionSection>
      </ContentsContainer>

      <FormWrapper>
        <div className='p-6 text-start'>
          <CategorySelector />
        </div>
      </FormWrapper>

      <FormWrapper>
        <div className='p-6 text-start'>
          <RentalPeriodBox />
        </div>
      </FormWrapper>

      <FormWrapper>
        <div className='p-6 text-start'>
          <ImageUploader />
        </div>
      </FormWrapper>

      <div className='flex w-full flex-col items-center'>
        <ProgressBar step={step} />
        <NavigationButtons currentStep={step} resetForm={resetForm} />
      </div>
    </div>
  );
};
