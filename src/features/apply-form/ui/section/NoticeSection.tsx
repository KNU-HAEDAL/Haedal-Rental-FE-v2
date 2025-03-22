import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/shared';
import { ContentsContainer, DescriptionSection } from '@/widgets';

import {
  ItemListButton,
  NavigationButtons,
  NoticeMessage,
  ProgressBar,
} from '../../components';

export const NoticeSection = ({
  currentStep,
  onNext,
  resetForm,
}: {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  resetForm: () => void;
}) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(RouterPath.MAIN);
  };

  return (
    <div>
      <ContentsContainer title='물품 대여 안내'>
        <DescriptionSection>
          <p className='text-start'>
            해달에서는 동아리 내의 공용 물품을 대여 장부 작성을 통해 무료로
            대여하고 있습니다. 대여 물품 관리를 위해 아래 사항을 꼭 지켜주세요.
          </p>
        </DescriptionSection>
        <div className='bg-white p-5 text-left'>
          <NoticeMessage />
          <div className='mt-4 flex justify-start'>
            <ItemListButton />
          </div>
        </div>
      </ContentsContainer>

      <div className='mt-4 flex w-full flex-col items-center'>
        <ProgressBar step={currentStep} totalSteps={3} />
        <NavigationButtons
          currentStep={currentStep}
          onNext={onNext}
          onBack={handleBack}
          resetForm={resetForm}
        />
      </div>
    </div>
  );
};
