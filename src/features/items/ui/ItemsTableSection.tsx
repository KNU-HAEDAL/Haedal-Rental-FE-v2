import { useState } from 'react';

import { ITEM_BODIES, ITEM_HEADERS } from '@/features';
import { Badge, Button, ITEM_TYPE, ItemTable } from '@/shared';

export const ItemsTableSection = () => {
  //   const navigate = useNavigate();
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isAvailableSelected, setIsAvailableSelected] =
    useState<boolean>(false);

  const filteredItems = ITEM_BODIES.filter((item) => {
    const matchType =
      selectedTypes.length === 0 || selectedTypes.includes(item.type);
    const matchAvailability =
      !isAvailableSelected || item.status === '대여 가능';

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
              variant={
                selectedTypes.includes(item.type) ? 'moonTag' : 'outline'
              }
              onClick={() => handleSelectType(item.type)}
            >
              {item.type}
            </Button>
          ))}
        </div>
        <Button
          variant={isAvailableSelected === true ? 'moonTag' : 'outline'}
          onClick={handleAvailableSelect}
        >
          대여 가능
        </Button>
      </div>
      <div className='overflow-hidden px-3'>
        <ItemTable
          headers={ITEM_HEADERS}
          items={filteredItems}
          itemKey='name'
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
          onClickItem={(item) => goToItemDetail(item.itemId)}
        />
      </div>
    </div>
  );
};
