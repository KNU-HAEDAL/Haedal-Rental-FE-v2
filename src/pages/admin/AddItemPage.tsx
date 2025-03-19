import { AddItemForm } from '@/features';

import { BackButton } from '@/shared';

import { ContentsContainer, PageWrapper } from '@/widgets';

export const AddItemPage = () => {
  return (
    <PageWrapper>
      <ContentsContainer title='물품 추가'>
        <p className='font-bold'>대여 가능한 물품을 추가해주세요.</p>
        <AddItemForm />
      </ContentsContainer>
      <BackButton />
    </PageWrapper>
  );
};
