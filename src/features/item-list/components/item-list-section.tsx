import { useState } from 'react';

import {
  AVAILABLE_ITEM_BODIES,
  AVAILABLE_ITEM_HEADERS,
  ITEM_TYPE,
} from '@/features';

import { Button, ItemTable } from '@/shared';

export const ItemListSection = () => {
  //   const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isAvailableSelected, setIsAvailableSelected] =
    useState<boolean>(false);

  const filteredItems = AVAILABLE_ITEM_BODIES.filter((item) => {
    const matchType =
      selectedTypes.length === 0 || selectedTypes.includes(item.type);
    const matchAvailability =
      !isAvailableSelected || item.status === '대여가능';

    return matchType && matchAvailability;
  });

  const handleSelectType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const handleAvailableSelect = () => {
    setIsAvailableSelected((prev) => !prev);
  };

  const goToItemDetail = (itemId: string) => {
    // navigate(getDynamicPath.rentedItemDetail(String(itemId)));
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
              variant={selectedTypes.includes(item.type) ? 'moon' : 'outline'}
              onClick={() => handleSelectType(item.type)}
            >
              {item.type}
            </Button>
          ))}
        </div>
        <Button
          type='button'
          variant={isAvailableSelected === true ? 'moon' : 'outline'}
          onClick={handleAvailableSelect}
        >
          대여가능
        </Button>
      </div>
      <div className='overflow-hidden px-3'>
        <ItemTable
          headers={AVAILABLE_ITEM_HEADERS}
          items={filteredItems}
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
          onClickItem={(item) => goToItemDetail(item.itemId)}
        />
      </div>
    </div>
  );
};
