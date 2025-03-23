import { ContentsContainer, DescriptionSection } from '@/widgets';

import { ItemListBox, NoticeMessage } from '../../components';

export const NoticeSection = () => {
  return (
    <ContentsContainer title='물품 대여 안내'>
      <DescriptionSection className='px-5 text-start'>
        해달에서는 동아리 내의 공용 물품을 대여 장부 작성을 통해 무료로 대여하고
        있습니다. 대여 물품 관리를 위해 아래 사항을 꼭 지켜주세요.
      </DescriptionSection>
      <div className='flex flex-col gap-5 bg-white px-5 text-left'>
        <NoticeMessage />
        <ItemListBox />
      </div>
    </ContentsContainer>
  );
};
