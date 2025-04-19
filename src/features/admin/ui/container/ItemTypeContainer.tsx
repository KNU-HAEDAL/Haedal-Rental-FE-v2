import { Badge, ITEM_TYPE } from '@/shared';

import { ItemBox } from '../../components';

type Props = {
  itemType: string;
};

export const ItemTypeContainer = ({ itemType }: Props) => {
  return (
    <ItemBox className='inner-y gap-3 border'>
      <p>대여 물품의 종류를 선택해주세요.</p>
      <div className='flex w-full gap-2'>
        {ITEM_TYPE.map((item) => (
          <Badge
            key={item.value}
            variant={itemType === item.type ? 'unavailable' : 'available'}
          >
            {item.type}
          </Badge>
        ))}
      </div>
    </ItemBox>
  );
};
