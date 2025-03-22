import { ContentsContainer, DescriptionSection } from '@/widgets';

import {
  ItemListButton,
  NavigationButtons,
  NoticeMessage,
  ProgressBar,
} from '../../components';

export const NoticeSection = ({
  currentStep,
  resetForm,
}: {
  currentStep: number;
  resetForm: () => void;
}) => {
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
        <ProgressBar step={currentStep} />
        <NavigationButtons currentStep={currentStep} resetForm={resetForm} />
      </div>
    </div>
  );
};
