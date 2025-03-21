import { ItemsTableSection } from '@/features';
import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';
import {
  ButtonContainer,
  ContentsContainer,
  DescriptionSection,
  PageWrapper,
} from '@/widgets';

export const ItemsPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title={NAVIGATE_BUTTONS_DATA[0].title}>
        <DescriptionSection>
          {NAVIGATE_BUTTONS_DATA[0].description}
        </DescriptionSection>
        <ItemsTableSection />
      </ContentsContainer>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
    </PageWrapper>
  );
};
