import { Spinner } from '@/shared';

import { MyRentalTable } from '../components';
import { BodyData, HeaderData } from '../model';

type Props = {
  isPending: boolean;
  columnData: BodyData[];
  headerData: HeaderData[];
  bodyData: BodyData[];
};

export const MyRentalTableSection = ({
  isPending,
  columnData,
  headerData,
  bodyData,
}: Props) => {
  return (
    <>
      {isPending ? (
        <div className='h-[184px] w-[548px] pt-10'>
          <Spinner />
        </div>
      ) : (
        <div className='inner-x w-full'>
          {columnData ? (
            <MyRentalTable headerData={headerData} bodyData={bodyData} />
          ) : (
            <p className='inner-y font-bold'>대여 중인 물품이 없습니다.</p>
          )}
        </div>
      )}
    </>
  );
};
