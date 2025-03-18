import { Spinner } from '@/shared';

import { MyItemListTable } from '../components';
import { HeaderData, BodyData } from '../model';

type Props = {
  isPending: boolean;
  columnData: BodyData[];
  headerData: HeaderData[];
  bodyData: BodyData[];
};

export const TableSection = ({
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
        <div className='w-full px-5 pb-5'>
          {columnData ? (
            <MyItemListTable headerData={headerData} bodyData={bodyData} />
          ) : (
            <p className='py-5 font-bold'>대여중인 물품이 없습니다.</p>
          )}
        </div>
      )}
    </>
  );
};
