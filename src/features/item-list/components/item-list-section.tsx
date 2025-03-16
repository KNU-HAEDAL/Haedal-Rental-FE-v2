import { useState } from 'react';

import {
  AVAILABLE_ITEM_BODIES,
  AVAILABLE_ITEM_HEADERS,
  ITEM_TYPE,
} from '@/features';

import { Button, ItemTable } from '@/shared';

export const ItemListSection = () => {
  //   const navigate = useNavigate();
  const [isSelectedType, setIsSelectedType] = useState<string | null>();

  const filteredItems = AVAILABLE_ITEM_BODIES.filter(
    (item) => item.type === isSelectedType,
    // 선택된 타입의 아이템만 ItemTable에 보이게
  );

  const handleSelectType = (type: string) => {
    setIsSelectedType(type);
  };

  const handleClickItem = (itemId: string) => {
    // navigate(getDynamicPath.rentItemDetail(String(itemId)));
    // Todo: 물품 대여 정보 페이지로 이동 -> 대여 신청 폼으로 이동 (현재는 딱히 UI가 없음)
    console.log(itemId);
  };

  return (
    <div className='flex w-full flex-col justify-center gap-5'>
      <div className='flex w-full justify-between px-3'>
        <div className='flex gap-2'>
          {ITEM_TYPE.map((item) => (
            <Button
              key={item.type}
              variant={isSelectedType === `${item.type}` ? 'moon' : 'outline'}
              onClick={() => handleSelectType(item.type)}
            >
              {item.type}
            </Button>
          ))}
        </div>
      </div>
      <div className='overflow-hidden px-3'>
        <ItemTable
          headers={AVAILABLE_ITEM_HEADERS}
          items={!isSelectedType ? AVAILABLE_ITEM_BODIES : filteredItems}
          itemKey='name'
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
          onItemClick={(item) => handleClickItem(item.itemId)}
        />
      </div>
    </div>
  );
};
