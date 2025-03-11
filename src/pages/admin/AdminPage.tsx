import { ITEM_BODY, ITEM_HEADERS } from '@/features';

import { AuthButtons, Button, ItemTable, SymbolLogo } from '@/shared';

export const AdminPage = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center gap-3 text-center'>
      <SymbolLogo />
      <AuthButtons />
      <div className='flex h-full w-[550px] flex-col items-center gap-5 border border-gray-200'>
        <div className='bg-haedal flex w-full justify-center py-3'>
          <p className='text-xl font-bold text-white'>관리자 페이지</p>
        </div>
        <p>해달 동아리 물품 대여 상태입니다.</p>
        <div className='w-full px-3'>
          <div className='flex w-full justify-between'>
            <div className='flex gap-2'>
              <Button variant='moon'>대여가능</Button>
              <Button variant='outline' className='border-sun text-sun'>
                대여중
              </Button>
            </div>
            <div className='flex gap-2'>
              <Button>물품추가</Button>
              <Button variant='ghost' className='text-sun'>
                물품 삭제
              </Button>
            </div>
          </div>
          <div className='overflow-hidden pt-5'>
            <ItemTable
              headers={ITEM_HEADERS}
              items={ITEM_BODY}
              renderCell={(key, item) => {
                if (key === 'status') {
                  return (
                    <span
                      className={`flex justify-center px-1 py-1 text-sm font-bold ${
                        item.status === '대여가능'
                          ? 'bg-moon text-haedal'
                          : 'bg-sun text-white'
                      }`}
                    >
                      {item.status}
                    </span>
                  );
                }
                return item[key];
              }}
            />
          </div>
        </div>
      </div>
      <div className='w-full pt-2 pb-6'>
        <Button variant='outline' className='px-6 shadow-md'>
          뒤로
        </Button>
      </div>
    </div>
  );
};
