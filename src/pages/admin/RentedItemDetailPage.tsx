import { useNavigate } from 'react-router-dom';

import {
  ITEM_APPLY_DATA,
  ItemImageSection,
  ItemNameSection,
  ItemPeriodSection,
  ItemTypeSection,
  LenderInfoSection,
} from '@/features';

import { Button, Spinner, useGetMockData } from '@/shared';

import { ContentsContainer, PageWrapper } from '@/widgets';

export const RentedItemDetailPage = () => {
  const navigate = useNavigate();

  const { data: itemData, isPending } = useGetMockData(ITEM_APPLY_DATA);

  if (isPending) {
    return <Spinner />;
  }

  return (
    <PageWrapper>
      <ContentsContainer title='물품 대여 정보'>
        <LenderInfoSection
          name={itemData.lenderName}
          phoneNumber={itemData.lenderPhoneNumber}
        />
      </ContentsContainer>
      <ItemNameSection itemName={itemData.itemName} />
      <ItemTypeSection itemType={itemData.itemType} />
      <ItemPeriodSection
        startDate={itemData.startDate}
        endDate={itemData.endDate}
      />
      <ItemImageSection itemImage={itemData.imageUrl} />
      <div className='flex items-center justify-center gap-3 pt-1 pb-5'>
        <Button onClick={() => navigate(-1)} variant='outline'>
          확인
        </Button>
      </div>
    </PageWrapper>
  );
};
