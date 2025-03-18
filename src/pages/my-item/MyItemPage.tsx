import {
  MY_ITEM_BODY,
  MY_ITEM_HEADERS,
  PenaltySection,
  TableSection,
} from '@/features';

import { BackButtons, NAVIGATE_BUTTONS_DATA, useGetMockData } from '@/shared';

import { DescriptionSection, LogoContainer } from '@/widgets';

export const MyItemPage = () => {
  const { data: columnData, isPending } = useGetMockData(MY_ITEM_BODY);
  const { data: penaltyData } = useGetMockData(1);

  const name = '김해달';

  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center'>
      <LogoContainer title={NAVIGATE_BUTTONS_DATA[2].title}>
        <DescriptionSection
          name={name}
          description={NAVIGATE_BUTTONS_DATA[2].description}
        />
        <PenaltySection penaltyData={penaltyData} />
        <TableSection
          isPending={isPending}
          columnData={columnData}
          headerData={MY_ITEM_HEADERS}
          bodyData={MY_ITEM_BODY}
        />
      </LogoContainer>
      <BackButtons />
    </div>
  );
};
