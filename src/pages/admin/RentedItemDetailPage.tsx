import { useParams } from 'react-router-dom';

import {
  ItemImageContainer,
  ItemNameContainer,
  ItemPeriodContainer,
  ItemTypeContainer,
  LenderInfoSection,
  useGetItemDetail,
} from '@/features';
import { BackButton, Spinner } from '@/shared';
import { ButtonContainer, ContentsContainer, PageWrapper } from '@/widgets';

export const RentedItemDetailPage = () => {
  const { itemId } = useParams();

  const {
    data: itemData,
    isPending,
    isError,
  } = useGetItemDetail({
    itemId: itemId ?? '',
  });

  if (!itemData || isError) {
    return <div>에러 발생</div>;
  }

  if (isPending) {
    return <Spinner />;
  }

  return (
    <PageWrapper>
      <ContentsContainer title='물품 대여 정보'>
        <LenderInfoSection
          name={itemData.rentalMemberName}
          phoneNumber={itemData.rentalMemberPhoneNumber}
        />
      </ContentsContainer>
      <ItemNameContainer itemName={itemData.itemName} />
      <ItemTypeContainer itemType={itemData.itemCategory} />
      <ItemPeriodContainer
        startDate={itemData.rentalDate}
        endDate={itemData.returnDate}
      />
      <ItemImageContainer itemImage={itemData.picture} />
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
    </PageWrapper>
  );
};
