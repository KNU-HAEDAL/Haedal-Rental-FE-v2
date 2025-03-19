import { ItemsTableSection } from '@/features';

import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';

import { ButtonContainer, ContentsContainer, PageWrapper } from '@/widgets';

export const AdminPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title={NAVIGATE_BUTTONS_DATA[3].title}>
        <ItemsTableSection />
      </ContentsContainer>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
    </PageWrapper>
  );
};
