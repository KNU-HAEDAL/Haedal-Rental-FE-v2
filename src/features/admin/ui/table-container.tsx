import { useEffect, useState } from 'react';

import { Button, ItemTable } from '@/shared';

import { ITEM_BODY, ITEM_HEADERS } from '../model';

export const TableContainer = () => {
  const [selection, setSelection] = useState<Set<string>>(new Set());

  useEffect(() => {
    console.log(Array.from(selection));
  }, [selection]);

  return (
    <>
      <p>해달 동아리 물품 대여 상태입니다.</p>
      <div className='w-full px-3'>
        <div className='flex justify-between w-full'>
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
        <div className='pt-5 overflow-hidden'>
          <ItemTable
            headers={ITEM_HEADERS}
            items={ITEM_BODY}
            selectable={false}
            itemKey='name'
            updateSelection={(newSelection) =>
              setSelection(new Set(newSelection))
            }
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
    </>
  );
};
