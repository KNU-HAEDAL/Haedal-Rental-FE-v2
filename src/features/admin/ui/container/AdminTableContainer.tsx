import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Badge,
  Button,
  ItemTable,
  NAVIGATE_BUTTONS_DATA,
  RouterPath,
  getDynamicPath,
} from '@/shared';

import { ADMIN_ITEM_BODIES, ADMIN_ITEM_HEADERS } from '../../model';

export const AdminTableContainer = () => {
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
      <div className='inner-x w-full'>
        <div className='flex w-full justify-between'>
          <div className='flex gap-2'>
            <Button variant='moonTag'>대여 가능</Button>
            <Button variant='outline'>대여 중</Button>
          </div>
          <div className='flex gap-2'>
            <Button onClick={goToAddItem}>물품 추가</Button>
            <Button variant='danger'>물품 삭제</Button>
          </div>
        </div>
        <div className='overflow-hidden pt-5'>
          <ItemTable
            headers={ADMIN_ITEM_HEADERS}
            items={ADMIN_ITEM_BODIES}
            selectable={false}
            itemKey='name'
            updateSelection={(newSelection) =>
              setSelection(new Set(newSelection))
            }
            renderCell={(key, item) => {
              if (key === 'status') {
                return (
                  <Badge
                    variant={
                      item.status === '대여 가능' ? 'available' : 'unavailable'
                    }
                  >
                    {item.status}
                  </Badge>
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
