import { ItemBox } from '../../components';

type Props = {
  itemName: string;
};

export const ItemNameContainer = ({ itemName }: Props) => {
  return (
    <ItemBox className='gap-3 border py-5'>
      <p>대여 물품의 이름을 작성해주세요.</p>
      <span className='border-b'>
        <p className='py-1'>{itemName}</p>
      </span>
    </ItemBox>
  );
};
