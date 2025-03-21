import { NavButtonSection } from '@/features';
import { ContentsContainer, DescriptionSection, PageWrapper } from '@/widgets';

export const MainPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title='물품 대여 장부 서비스'>
        <DescriptionSection>
          <p>해달 동아리방 물품 대여 서비스입니다.</p>
          <p>
            해달 물품은 해달 동아리원이라면 누구나 대여 장부 작성 후 대여
            가능합니다.
          </p>
        </DescriptionSection>
        <NavButtonSection />
      </ContentsContainer>
    </PageWrapper>
  );
};
