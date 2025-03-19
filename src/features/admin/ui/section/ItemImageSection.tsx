import { ItemBox } from '../../components';

type Props = {
  itemImage: string;
};

export const ItemImageSection = ({ itemImage }: Props) => {
  return (
    <ItemBox className='gap-3 border py-5'>
      <p>대여 물품을 사진으로 찍어서 업로드해주세요.</p>
      <span className='flex w-full justify-center text-center'>
        {itemImage ? (
          <img src={itemImage} alt='item' className='h-[124px] w-[100px]' />
        ) : (
          <div className='flex h-[124px] w-[100px] items-center justify-center bg-gray-300'>
            Item-Image
          </div>
        )}
      </span>
    </ItemBox>
  );
};
