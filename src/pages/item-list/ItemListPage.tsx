import { ItemListSection } from '@/features';

// Todo:
// 같은 절대 경로에서 import하는 모듈들 이름 재설정 (admin 내 모듈들)

import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';

import {
  ButtonContainer,
  ContentsContainer,
  DescriptionSection,
  PageWrapper,
} from '@/widgets';

export const ItemListPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title={NAVIGATE_BUTTONS_DATA[0].title}>
        <DescriptionSection>
          {NAVIGATE_BUTTONS_DATA[0].description}
        </DescriptionSection>
        <ItemListSection />
      </ContentsContainer>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
    </PageWrapper>
  );
};
