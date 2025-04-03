import { AdminItemsTableSection } from '@/features';
import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';
import {
  ButtonSection,
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
        <AdminItemsTableSection />
      </ContentsContainer>
      <ButtonSection>
        <BackButton />
      </ButtonSection>
    </PageWrapper>
  );
};
