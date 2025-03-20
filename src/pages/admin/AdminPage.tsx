import { ItemsTableSection } from '@/features';

import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';

import {
  ButtonContainer,
  ContentsContainer,
  DescriptionSection,
  PageWrapper,
} from '@/widgets';

export const AdminPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title={NAVIGATE_BUTTONS_DATA[3].title}>
        <DescriptionSection>
          {NAVIGATE_BUTTONS_DATA[3].description}
        </DescriptionSection>
        <ItemsTableSection />
      </ContentsContainer>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
    </PageWrapper>
  );
};
