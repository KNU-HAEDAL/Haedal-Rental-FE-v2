import { ItemWrapper } from '../components';

type Props = {
  itemName: string;
};

export const ItemNameSection = ({ itemName }: Props) => {
  return (
    <ItemWrapper className='gap-3 border py-5'>
      <p>대여 물품의 이름을 작성해주세요.</p>
      <span className='border-b'>
        <p className='py-1'>{itemName}</p>
      </span>
    </ItemWrapper>
  );
};
