import { ItemsTableSection } from '@/features';
import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';
import {
  ButtonSection,
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
      <ButtonSection>
        <BackButton />
      </ButtonSection>
    </PageWrapper>
  );
};
