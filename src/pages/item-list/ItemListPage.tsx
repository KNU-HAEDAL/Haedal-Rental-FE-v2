import { useNavigate } from 'react-router-dom';

import { ItemListDescriptionSection, ItemListSection } from '@/features';

// Todo: DescriptionSection 스타일을 컴포넌트화할 필요
// 같은 절대 경로에서 import하는 모듈들 이름 재설정 (admin 내 모듈들)

import { Button, NAVIGATE_BUTTONS_DATA } from '@/shared';

import { LogoContainer } from '@/widgets';

export const ItemListPage = () => {
  const navigate = useNavigate();

  return (
    <main className='flex h-full flex-col items-center justify-center gap-3 text-center'>
      <LogoContainer title={NAVIGATE_BUTTONS_DATA[0].title}>
        <ItemListDescriptionSection />
        <ItemListSection />
      </LogoContainer>
      <div className='w-full pt-2 pb-6'>
        <Button
          onClick={() => navigate(-1)}
          variant='outline'
          className='px-6 shadow-md'
        >
          뒤로
        </Button>
      </div>
    </main>
  );
};
