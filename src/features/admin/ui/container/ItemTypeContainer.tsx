import { Badge } from '@/shared';

import { ItemBox } from '../../components';
import { ITEM_TYPE } from '../../model';

type Props = {
  itemType: string;
};

export const ItemTypeContainer = ({ itemType }: Props) => {
  return (
    <ItemBox className='gap-3 border py-5'>
      <p>대여 물품의 종류를 선택해주세요.</p>
      <div className='flex w-full gap-2'>
        {ITEM_TYPE.map((item) => (
          <Badge
            key={item.value}
            variant={itemType === item.type ? 'available' : 'outline'}
          >
            {item.type}
          </Badge>
        ))}
      </div>
    </ItemBox>
  );
};
