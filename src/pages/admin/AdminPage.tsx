import { TableContainer } from '@/features';

import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';

import { ContentsContainer, PageWrapper } from '@/widgets';

export const AdminPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title={NAVIGATE_BUTTONS_DATA[3].title}>
        <TableContainer />
      </ContentsContainer>
      <BackButton />
    </PageWrapper>
  );
};
