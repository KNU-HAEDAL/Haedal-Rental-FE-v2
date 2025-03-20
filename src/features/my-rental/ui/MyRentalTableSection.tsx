import { Spinner } from '@/shared';

import { MyRentalTable } from '../components';
import { HeaderData, BodyData } from '../model';

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
        <div className='w-full px-3'>
          {columnData ? (
            <MyRentalTable headerData={headerData} bodyData={bodyData} />
          ) : (
            <p className='py-5 font-bold'>대여 중인 물품이 없습니다.</p>
          )}
        </div>
      )}
    </>
  );
};
