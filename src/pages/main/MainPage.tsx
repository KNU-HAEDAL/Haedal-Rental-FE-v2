import { NavButtonSection, DescriptionSection } from '@/features';

import { ContentsContainer, PageWrapper } from '@/widgets';

export const MainPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title='물품 대여 장부 서비스'>
        <DescriptionSection />
        <NavButtonSection />
      </ContentsContainer>
    </PageWrapper>
  );
};
