import { AddItemForm } from '@/features';
import { BackButton } from '@/shared';
import {
  ButtonSection,
  ContentsContainer,
  DescriptionSection,
  PageWrapper,
} from '@/widgets';

export const AddItemPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title='물품 추가'>
        <DescriptionSection>
          대여 가능한 물품을 추가해주세요.
        </DescriptionSection>
        <AddItemForm />
      </ContentsContainer>
      <ButtonSection>
        <BackButton />
      </ButtonSection>
    </PageWrapper>
  );
};
