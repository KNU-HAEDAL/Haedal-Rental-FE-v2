import {
  MY_RENTAL_BODIES,
  MY_RENTAL_HEADERS,
  MyRentalTableSection,
  PenaltySection,
} from '@/features';

import { BackButton, NAVIGATE_BUTTONS_DATA, useGetMockData } from '@/shared';

import {
  ButtonContainer,
  ContentsContainer,
  DescriptionSection,
  PageWrapper,
} from '@/widgets';

export const MyRentalPage = () => {
  const { data: columnData, isPending } = useGetMockData(MY_RENTAL_BODIES);
  const { data: penaltyData } = useGetMockData(1);

  const name = '김해달';

  return (
    <PageWrapper>
      <ContentsContainer title={NAVIGATE_BUTTONS_DATA[2].title}>
        <DescriptionSection>
          {name} {NAVIGATE_BUTTONS_DATA[2].description}
        </DescriptionSection>
        <PenaltySection penaltyData={penaltyData} />
        <MyRentalTableSection
          isPending={isPending}
          columnData={columnData}
          headerData={MY_RENTAL_HEADERS}
          bodyData={MY_RENTAL_BODIES}
        />
      </ContentsContainer>
      <ButtonContainer>
        <BackButton />
      </ButtonContainer>
    </PageWrapper>
  );
};
