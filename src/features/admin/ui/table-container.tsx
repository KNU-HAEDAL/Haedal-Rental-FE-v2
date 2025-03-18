import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  getDynamicPath,
  ItemTable,
  NAVIGATE_BUTTONS_DATA,
  RouterPath,
} from '@/shared';

import { ITEM_BODY, ITEM_HEADERS } from '../model';

export const TableContainer = () => {
  const [selection, setSelection] = useState<Set<string>>(new Set());

  const navigate = useNavigate();

  const goToAddItem = () => {
    navigate(RouterPath.ADMIN_ADD_ITEM);
  };

  const goToRentedItemDetail = (itemId: string) => {
    navigate(getDynamicPath.rentedItemDetail(String(itemId)));
  };

  useEffect(() => {
    console.log(Array.from(selection));
  }, [selection]);

  return (
    <>
      <p>{NAVIGATE_BUTTONS_DATA[3].description}</p>
      <div className='w-full px-3'>
        <div className='flex w-full justify-between'>
          <div className='flex gap-2'>
            <Button variant='moon'>대여가능</Button>
            <Button variant='outline' className='border-sun text-sun'>
              대여중
            </Button>
          </div>
          <div className='flex gap-2'>
            <Button onClick={goToAddItem}>물품 추가</Button>
            <Button variant='ghost' className='text-sun'>
              물품 삭제
            </Button>
          </div>
        </div>
        <div className='overflow-hidden pt-5'>
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
            onClickItem={(item) => goToRentedItemDetail(item.itemId)}
          />
        </div>
      </div>
    </>
  );
};
