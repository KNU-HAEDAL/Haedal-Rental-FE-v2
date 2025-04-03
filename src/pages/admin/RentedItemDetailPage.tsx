import {
  ITEM_APPLY_DATA,
  ItemImageContainer,
  ItemNameContainer,
  ItemPeriodContainer,
  ItemTypeContainer,
  LenderInfoSection,
} from '@/features';
import { BackButton, Spinner, useGetMockData } from '@/shared';
import { ButtonSection, ContentsContainer, PageWrapper } from '@/widgets';

export const RentedItemDetailPage = () => {
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
      <ItemNameContainer itemName={itemData.itemName} />
      <ItemTypeContainer itemType={itemData.itemType} />
      <ItemPeriodContainer
        startDate={itemData.startDate}
        endDate={itemData.endDate}
      />
      <ItemImageContainer itemImage={itemData.imageUrl} />
      <ButtonSection>
        <BackButton />
      </ButtonSection>
    </PageWrapper>
  );
};
