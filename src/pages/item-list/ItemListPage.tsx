import { ItemListDescriptionSection, ItemListSection } from '@/features';

// Todo: DescriptionSection 스타일을 컴포넌트화할 필요
// 같은 절대 경로에서 import하는 모듈들 이름 재설정 (admin 내 모듈들)

import { BackButton, NAVIGATE_BUTTONS_DATA } from '@/shared';

import { ContentsContainer, PageWrapper } from '@/widgets';

export const ItemListPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title={NAVIGATE_BUTTONS_DATA[0].title}>
        <ItemListDescriptionSection />
        <ItemListSection />
      </ContentsContainer>
      <BackButton />
    </PageWrapper>
  );
};
